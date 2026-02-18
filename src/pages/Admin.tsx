
import { useState } from 'react';
import { collection, getDocs, query, orderBy, Timestamp } from 'firebase/firestore';
import type { FirestoreError } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Lock, LogIn, Calendar, User, Phone, Book } from 'lucide-react';

interface Enquiry {
    id: string;
    name: string;
    phone: string;
    grade: string;
    subject: string;
    message: string;
    timestamp: Timestamp | null;
}

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const isRecoverableFirestoreError = (err: unknown) => {
        const code = (err as FirestoreError)?.code;
        const message = err instanceof Error ? err.message.toLowerCase() : '';

        return (
            code === 'unavailable' ||
            message.includes('offline') ||
            message.includes('missing or insufficient permissions')
        );
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple hardcoded password for demonstration
        if (password === 'admin123') {
            setIsAuthenticated(true);
            fetchEnquiries();
        } else {
            setError('Invalid Password');
        }
    };

    const fetchEnquiries = async () => {
        setLoading(true);
        try {
            // Use try-catch to handle case where Firebase is not configured yet
            const q = query(collection(db, "enquiries"), orderBy("timestamp", "desc"));
            const querySnapshot = await getDocs(q);
            const data: Enquiry[] = querySnapshot.docs.map((doc) => {
                const raw = doc.data() as Partial<Enquiry>;

                return {
                    id: doc.id,
                    name: raw.name ?? '',
                    phone: raw.phone ?? '',
                    grade: raw.grade ?? '',
                    subject: raw.subject ?? '',
                    message: raw.message ?? '',
                    timestamp: raw.timestamp ?? null,
                };
            });
            setEnquiries(data);
        } catch (err: unknown) {
            console.error("Error fetching enquiries:", err);
            // Fallback for demo if Firebase fails
            if (isRecoverableFirestoreError(err)) {
                setError("Firebase not connected or permissions denied. Showing demo data.");
                // You could set demo data here if you wanted
            } else {
                setError("Failed to fetch data. Check console.");
            }
        } finally {
            setLoading(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
                <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
                    <div className="text-center mb-8">
                        <div className="mx-auto h-12 w-12 bg-primary rounded-full flex items-center justify-center">
                            <Lock className="h-6 w-6 text-white" />
                        </div>
                        <h2 className="mt-4 text-2xl font-bold text-gray-900">Admin Login</h2>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary p-3 border"
                                placeholder="Enter admin password"
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            <span className="flex items-center">
                                Login <LogIn className="ml-2 h-4 w-4" />
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                    <button
                        onClick={() => setIsAuthenticated(false)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm transition-colors"
                    >
                        Logout
                    </button>
                </div>

                {/* Tabs or Sections */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
                        <h2 className="text-lg font-medium text-gray-900">Recent Enquiries</h2>
                    </div>

                    {loading ? (
                        <div className="p-8 text-center text-gray-500">Loading...</div>
                    ) : enquiries.length === 0 ? (
                        <div className="p-8 text-center text-gray-500">
                            <p>No enquiries found yet.</p>
                            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
                        </div>
                    ) : (
                        <ul className="divide-y divide-gray-200">
                            {enquiries.map((enquiry) => (
                                <li key={enquiry.id} className="p-6 hover:bg-gray-50 transition-colors">
                                    <div className="flex flex-col sm:flex-row justify-between">
                                        <div className="mb-4 sm:mb-0">
                                            <div className="flex items-center mb-2">
                                                <User className="h-4 w-4 text-gray-400 mr-2" />
                                                <span className="text-lg font-medium text-primary">{enquiry.name}</span>
                                            </div>
                                            <div className="flex items-center mb-1 text-gray-600">
                                                <Phone className="h-4 w-4 text-gray-400 mr-2" />
                                                <span>{enquiry.phone}</span>
                                            </div>
                                            <div className="flex items-center text-gray-600">
                                                <Book className="h-4 w-4 text-gray-400 mr-2" />
                                                <span>{enquiry.grade} - {enquiry.subject || 'N/A'}</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-center justify-end text-sm text-gray-500 mb-2">
                                                <Calendar className="h-4 w-4 mr-1" />
                                                {enquiry.timestamp ? enquiry.timestamp.toDate().toLocaleDateString() : 'Just now'}
                                            </div>
                                            {enquiry.message && (
                                                <div className="bg-blue-50 p-3 rounded text-sm text-gray-700 max-w-md ml-auto text-left">
                                                    "{enquiry.message}"
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Admin;
