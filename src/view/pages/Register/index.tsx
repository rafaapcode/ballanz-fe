import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useRegisterController } from "./useRegisterController";

function Register() {
  const {
    errors,
    handleSubmit,
    register,
    isLoading
  } = useRegisterController();

  return (
     <>
      <header className="flex flex-col items-center gap-4  text-center">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">Crie em sua conta</h1>
        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">Já possui uma conta?</span>
          <Link to="/login" className="tracking-[-0.5px] text-teal-700 font-medium">
            Fazer Login
          </Link>
        </p>
      </header>

      <form onSubmit={handleSubmit} className="mt-[60px] flex flex-col gap-4">
        <Input error={errors.name?.message} type="text" placeholder="Nome"  {...register('name')}/>
        <Input error={errors.email?.message} type="email" placeholder="Email" {...register('email')}/>
        <Input error={errors.password?.message} type="password" placeholder="Senha" {...register('password')}/>
        <Button type="submit" className="mt-2" isLoading={isLoading}>
          Criar conta
        </Button>
      </form>
    </>
  )
}

export default Register