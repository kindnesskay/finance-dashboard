export default function Home() {
  return (
    <section className="max-w-lg w-full">
      <div className="">
        <h1 className="text-white text-4xl font-bold p-2">
          Track all your finances
          <br /> in one app
        </h1>
        <p className="text-gray-600 text-md font-medium p-2">
          Manage your finances in our app.
          <br />
          We do everything to keep your money safe
        </p>
      </div>
      <div className="w-full font-semibold text-xl gap-4 flex justify-center">
        <button className="w-1/2 h-full p-4 text-white rounded-lg bg-gray-600">
          Login
        </button>
        <button className="w-1/2 h-full p-4 text-white rounded-lg bg-blue-500">
          Register
        </button>
      </div>
    </section>
  );
}
