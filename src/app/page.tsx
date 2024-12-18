import Form from "@/components/Form";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="relative w-full lg:w-1/2 lg:min-h-1/2 p-2 flex row-start-2 items-center sm:items-start">
        <div className="w-full ">
        <h1 className="w-full text-center font-bold">Create your profile</h1>
          <Form />
        </div>
      </main>
    </div>
  );
}
