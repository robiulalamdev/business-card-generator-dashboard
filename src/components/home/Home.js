import {
  useCreateTicketMutation,
  useGetTicketsQuery,
} from "@/redux/features/ticket/ticketApi";
import { Button } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { SpinnerCircularFixed } from "spinners-react";

const Home = () => {
  const [createTicket, { isLoading }] = useCreateTicketMutation();
  const { data } = useGetTicketsQuery();
  const { handleSubmit, register } = useForm();

  const handleSave = async (data) => {
    const options = {
      data: data,
    };
    const result = await createTicket(options);
    if (result?.data?.success) {
      toast.success("Data Save Success!");
    } else {
      toast.error("Data Save Failed!");
    }
  };

  //   console.log(data);
  return (
    <main className=" w-full h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(handleSave)}
        className="max-w-[500px] w-full mx-auto bg-white h-fit px-3 py-5 rounded-md shadow border"
      >
        <div className="mb-4">
          <span className="block tracking-[0.26px] leading-[16px] text-black text-sm mb-1">
            Email
          </span>
          <input
            {...register("email", { required: true })}
            type="email"
            className="w-full h-10 bg-gray-100 outline-none px-2 rounded text-sm"
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="mb-4">
          <span className="block tracking-[0.26px] leading-[16px] text-black text-sm mb-1">
            URL
          </span>
          <input
            {...register("url", { required: true })}
            type="url"
            className="w-full h-10 bg-gray-100 outline-none px-2 rounded text-sm"
            placeholder="Enter URL"
            required
          />
        </div>

        <div className="mb-4">
          <span className="block tracking-[0.26px] leading-[16px] text-black text-sm mb-1">
            Code
          </span>
          <input
            {...register("code", { required: true })}
            type="number"
            className="w-full h-10 bg-gray-100 outline-none px-2 rounded text-sm"
            placeholder="Enter Code"
            required
          />
        </div>
        <div className="mt-5 col-span-4">
          <Button
            type="submit"
            className="flex justify-center items-center gap-2 max-w-[180px] w-full h-10 shadow-none hover:shadow-none rounded bg-primary"
          >
            {isLoading && (
              <SpinnerCircularFixed
                size={25}
                thickness={150}
                speed={450}
                color="white"
                secondaryColor="gray"
              />
            )}
            Submit
          </Button>
        </div>
      </form>
    </main>
  );
};

export default Home;
