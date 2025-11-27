import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

function Register() {
  return (
    <div class="min-h-screen flex items-center justify-center">
      <div class="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
        <h2 class="text-2xl font-bold mb-2">Create account</h2>
        <p class="text-sm text-gray-500 mb-6">
          Pick a role during signup or change later in profile.
        </p>

        <form id="registerForm" class="space-y-4">
          <Input
            inputID="name"
            placeholderText="Full name"
            inputStyles="w-full border rounded-lg px-4 py-2"
          />
          <Input
            inputID="email"
            inputType="email"
            placeholderText="Email"
            inputStyles="w-full border rounded-lg px-4 py-2"
          />
          <Input
            inputID="password"
            inputType="password"
            placeholderText="Password"
            inputStyles="w-full border rounded-lg px-4 py-2"
          />
          <label class="text-sm">
            I want to:
            <select id="role" className="ml-2 border rounded px-2 py-1">
              <option value="attendee">Attend</option>
              <option value="host">Host</option>
            </select>
          </label>
          <Button
            buttonStyles="w-full bg-[#008489] text-white px-4 py-2 rounded-lg mt-3"
            text="Create account"
          />
        </form>

        <p class="text-sm text-gray-500 text-center mt-4">By registering you agree to the Terms.</p>
      </div>
    </div>
  );
}

export default Register;
