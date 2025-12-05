import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import InputForm from "./CustomInput";
import "../../layout/Footer/Footer.css";

const schema = z.object({
  email: z.string().min(1, "Debes ingresar un correo").email("Correo invalido"),
});

type FormValues = z.infer<typeof schema>;

const CustomForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        name="email"
        control={control}
        label="E-mail"
        type="email"
        error={errors.email}
      />
      <button className="submit-button" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default CustomForm;
