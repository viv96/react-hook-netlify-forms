import type { NextPage } from "next";
import { FieldValues, useForm } from "react-hook-form";
import {
  Button,
  Form,
  PageContainer,
  Row,
  Input,
  Message,
} from "../styles/styles";

interface FormProps {
  "first-name": string;
  "last-name": string;
  email: string;
  "contact-number": string;
  message?: string;
}

const Home: NextPage = () => {
  const { register, handleSubmit } = useForm();

  const formName = "contact-form";

  const onSubmit = async (data: FieldValues) => {
    const encode = (formData: FieldValues) =>
      Object.keys(formData)
        .map(
          (key) =>
            encodeURIComponent(key) + "=" + encodeURIComponent(formData[key])
        )
        .join("&");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": formName,
          ...data,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageContainer>
      <Form
        name={formName}
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" name="form-name" value={formName} />
        <Row>
          <Input
            {...register("first-name", {
              required: "Your first name is required",
            })}
            name="first-name"
            placeholder="First Name*"
          />
          <Input
            {...register("last-name", {
              required: "Your last name is required",
            })}
            name="last-name"
            placeholder="Last Name*"
          />
        </Row>
        <Row>
          <Input
            {...register("email", {
              required: "Your email is required",
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            })}
            name="email"
            placeholder="Email*"
          />
          <Input
            {...register("contact-number", {
              required: "A contact number is required",
              maxLength: 10,
              valueAsNumber: true,
            })}
            name="contact-number"
            placeholder="Contact Number"
          />
        </Row>
        <Row>
          <Message
            {...register("message")}
            name="message"
            placeholder="Your Message"
          />
        </Row>
        <Button type="submit">{"Submit"}</Button>
      </Form>
    </PageContainer>
  );
};

export default Home;
