
import { GraduationCap, BookUser } from 'lucide-react';

const Faculty = () => {
    const facultyMembers = [
        {
            name: 'Yogeswari',
            qualification: 'B.Sc. Chemistry',
            role: 'Head Tutor',
            bio: 'With a strong background in Science and Chemistry, Yogeswari brings years of teaching experience. She specializes in simplifying complex scientific concepts and ensuring students grasp the fundamentals effectively.',
            icon: <GraduationCap className="h-12 w-12 text-blue-500" />
        },
        {
            name: 'Sriharini',
            qualification: 'B.Sc. Computer Science (In Progress)',
            role: 'Tutor',
            bio: 'A passionate learner and educator, Sriharini handles Mathematics and Computer Science basics. Her youthful energy and relatable teaching style make learning engaging for younger students.',
            icon: <BookUser className="h-12 w-12 text-yellow-500" />
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-primary py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Meet Our Faculty</h1>
                    <p className="mt-4 text-xl text-secondary">
                        Experienced and dedicated mentors guiding your children.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {facultyMembers.map((member) => (
                        <div key={member.name} className="flex flex-col items-center bg-gray-50 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                            <div className="h-32 w-32 rounded-full bg-white flex items-center justify-center shadow-md mb-6 border-4 border-secondary">
                                {member.icon}
                                {/* Placeholder for actual image: <img src={member.image} alt={member.name} className="h-full w-full rounded-full object-cover" /> */}
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">{member.name}</h2>
                            <p className="text-primary font-medium">{member.qualification}</p>
                            <p className="text-sm text-gray-500 mb-4">{member.role}</p>
                            <p className="text-gray-600 text-center">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faculty;
