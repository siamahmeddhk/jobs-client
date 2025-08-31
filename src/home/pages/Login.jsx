import { FaFacebookF, FaApple, FaXTwitter } from "react-icons/fa6";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
        
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://source.unsplash.com/500x600/?forest,green"
            alt="login illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-green-800 mb-6">Welcome Back</h2>

          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                Remember Me
              </label>
              <a href="#" className="text-green-700 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-700 text-white font-semibold py-2 rounded-lg hover:bg-green-800 transition"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">Or login with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Buttons */}
          <div className="flex justify-center gap-4">
            <button className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
              <FaFacebookF size={18} />
            </button>
            <button className="p-3 rounded-full bg-black text-white hover:bg-gray-800 transition">
              <FaApple size={20} />
            </button>
            <button className="p-3 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition">
              <FaXTwitter size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
