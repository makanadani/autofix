"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  nome_cliente: z.string().min(2, "Mínimo de 2 caracteres").nonempty("Nome obrigatório"),
  nome_social_cliente: z.string().optional(),
  cpf_cliente: z.string().length(11, "CPF deve ter 11 dígitos").nonempty("CPF obrigatório"),
  cnh_cliente: z.string().length(9, "CNH deve ter 9 dígitos").nonempty("CNH obrigatória"),
  dt_nasc_cliente: z.string().nonempty("Data de nascimento obrigatória"),
  notificacoes_email: z.enum(["Sim", "Não"], { errorMap: () => ({ message: "Selecione Sim ou Não" }) }),
  notificacoes_mensagem: z.enum(["Sim", "Não"], { errorMap: () => ({ message: "Selecione Sim ou Não" }) }),
});

export default function CadastroCliente() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    const response = await fetch('/api/clientes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Cliente cadastrado com sucesso");
    } else {
      console.error("Erro ao cadastrar cliente");
    }
  };

  return (
    <main className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-portoBlue mb-6">Cadastro de Cliente</h1>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        
        {/* Campo Nome */}
        <div className="flex flex-col">
          <label htmlFor="nome_cliente" className="text-portoGray font-medium">Nome</label>
          <input type="text" id="nome_cliente" {...register("nome_cliente")} 
          className="border border-gray-300 rounded-md p-2 text-lg focus:border-portoBlue focus:outline-none" />
          {errors.nome_cliente && <span className="text-red-500">{errors.nome_cliente.message?.toString()}</span>}
        </div>

        {/* Campo Nome Social */}
        <div className="flex flex-col">
          <label htmlFor="nome_social_cliente" className="text-portoGray font-medium">Nome Social</label>
          <input type="text" id="nome_social_cliente" {...register("nome_social_cliente")}
          className="border border-gray-300 rounded-md p-2 text-lg focus:border-portoBlue focus:outline-none" />
          {errors.nome_social_cliente && <span className="text-red-500">{errors.nome_social_cliente.message?.toString()}</span>}
        </div>

        {/* Campo CPF */}
        <div className="flex flex-col">
          <label htmlFor="cpf_cliente" className="text-portoGray font-medium">CPF</label>
          <input type="text" id="cpf_cliente" {...register("cpf_cliente")}
          className="border border-gray-300 rounded-md p-2 text-lg focus:border-portoBlue focus:outline-none" />
          {errors.cpf_cliente && <span className="text-red-500">{errors.cpf_cliente.message?.toString()}</span>}
        </div>

        {/* Campo CNH */}
        <div className="flex flex-col">
          <label htmlFor="cnh_cliente" className="text-portoGray font-medium">CNH</label>
          <input type="text" id="cnh_cliente" {...register("cnh_cliente")}
          className="border border-gray-300 rounded-md p-2 text-lg focus:border-portoBlue focus:outline-none" />
          {errors.cnh_cliente && <span className="text-red-500">{errors.cnh_cliente.message?.toString()}</span>}
        </div>

        {/* Data de Nascimento */}
        <div className="flex flex-col">
          <label htmlFor="dt_nasc_cliente" className="text-portoGray font-medium">Data de Nascimento</label>
          <input type="date" id="dt_nasc_cliente" {...register("dt_nasc_cliente")}
          className="border border-gray-300 rounded-md p-2 text-lg focus:border-portoBlue focus:outline-none" />
          {errors.dt_nasc_cliente && <span className="text-red-500">{errors.dt_nasc_cliente.message?.toString()}</span>}
        </div>

        {/* Notificações por E-mail */}
        <div className="flex flex-col">
          <label className="text-portoGray font-medium">Notificações por E-mail</label>
          <select {...register("notificacoes_email")}
          className="border border-gray-300 rounded-md p-2 text-lg focus:border-portoBlue focus:outline-none">
            <option value="">Selecione</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
          {errors.notificacoes_email && <span className="text-red-500">{errors.notificacoes_email.message?.toString()}</span>}
        </div>

        {/* Notificações por Mensagem */}
        <div className="flex flex-col">
          <label className="text-portoGray font-medium">Notificações por Mensagem</label>
          <select {...register("notificacoes_mensagem")}
          className="border border-gray-300 rounded-md p-2 text-lg focus:border-portoBlue focus:outline-none">
            <option value="">Selecione</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
          {errors.notificacoes_mensagem && <span className="text-red-500">{errors.notificacoes_mensagem.message?.toString()}</span>}
        </div>

        {/* Botão de envio */}
        <button type="submit" className="w-full bg-portoBlue text-white font-bold p-3 rounded-md hover:bg-portoDarkBlue focus:outline-none">
          Salvar
        </button>
      </form>
    </main>
  );
}
