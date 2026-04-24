"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import CustomButton from "./CustomButton";
import Calendar from "./Calendar";

const notify = () =>
  toast("Thank you! Your booking request has been sent successfully.");

function BookForm() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required."),
    email: Yup.string().email("Email invalid").required("Email is required"),
    rentalPeriod: Yup.array()
      .of(Yup.date().nullable())
      .test("both-dates", "Select a full date range", (value) => {
        return !!value?.[0] && !!value?.[1];
      }),
    comment: Yup.string(),
  });

  return (
    <div className="p-6 border border-gray-300 rounded-xl max-w-sm w-full">
      <div className="flex flex-col gap-2 mb-4">
        <h3 className="font-bold text-xl">Book your car now!</h3>
        <h4 className="text-gray-600 text-sm">
          Stay connected! We are always ready to help you.
        </h4>
      </div>
      <Formik
        initialValues={{
          rentalPeriod: [null, null],
          name: "",
          email: "",
          comment: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          //   console.log(values);
          notify();
          resetForm();
        }}
      >
        <Form className="flex flex-col">
          <div className="flex flex-col">
            <Field
              className="focus:outline-0 w-full border border-gray-300 p-2 rounded-md"
              name="name"
              placeholder="Name*"
            />
            <div className="min-h-4">
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <Field
              className="focus:outline-0 border border-gray-300 p-2 rounded-md w-full"
              name="email"
              placeholder="Email*"
            />
            <div className="min-h-4">
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs flex"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <Calendar name="rentalPeriod" />
            <div className="min-h-4">
              <ErrorMessage
                name="rentalPeriod"
                component="div"
                className="text-red-500 text-xs flex"
              />
            </div>
          </div>
          <div className="flex">
            <Field
              as="textarea"
              name="comment"
              placeholder="Comment"
              rows={2}
              className="focus:outline-none text-sm border border-gray-300 p-2 rounded-md w-full resize-none mb-6"
            />
          </div>
          <CustomButton
            title="Submit"
            btnType="submit"
            containerStyles="hover:scale-105 py-[10px] flex rounded-full bg-blue-500 focus:outline-none"
            textStyles="text-white sm:text-[18px]  font-bold"
            rightIcon="/submit.svg"
          ></CustomButton>
          <Toaster position="top-center" />
        </Form>
      </Formik>
    </div>
  );
}

export default BookForm;
