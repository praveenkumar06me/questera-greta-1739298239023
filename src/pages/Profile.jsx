import { useAuth } from '../context/AuthContext';
import { FaUser } from 'react-icons/fa';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Please Login</h2>
        <p className="text-gray-600">You need to be logged in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-center mb-8">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <FaUser className="w-12 h-12 text-gray-400" />
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-center mb-8">{user.name}</h2>
          </div>
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold mb-2">Account Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Email</p>
                <p>{user.email}</p>
              </div>
              <div>
                <p className="text-gray-600">Member Since</p>
                <p>{new Date(user.joinDate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;