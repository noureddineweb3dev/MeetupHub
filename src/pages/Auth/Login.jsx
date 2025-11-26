import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

function Login() {
  return (
    <div className=" h-screen w-full flex justify-center items-center gap-10">
      <div className=" w-[400px] flex justify-center items-center flex-col gap-2 bg-white p-10 rounded-lg shadow-lg">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p>Sign in to manage your events and more.</p>
        </div>
        <div className="w-full flex flex-col">
          <Input
            placeholderText="Email"
            inputType="email"
            inputStyles="w-full p-2 border border-gray-300 rounded-lg mb-4"
          />
          <Input
            placeholderText="Password"
            inputType="password"
            inputStyles="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="w-full flex justify-between mb-2 ">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="Remember me" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <a href="#" className="text-teal-600 text-md hover:underline">
            Forgot?
          </a>
        </div>
        <div className="w-full flex flex-col gap-4 text-center">
          <Button
            text="Sign in"
            buttonStyles="w-full bg-rose-500 text-white px-3 py-2 rounded-lg"
          />
          <p className="text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-teal-600 hover:underline">
              Create account
            </a>{' '}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
