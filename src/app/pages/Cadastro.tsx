"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  nome_cliente: z
    .string()
    .min(2, "Mínimo de 2 caracteres")
    .nonempty("Nome obrigatório"),
  nome_social_cliente: z.string().optional(),
  cpf_cliente: z
    .string()
    .length(11, "CPF deve ter 11 dígitos")
    .nonempty("CPF obrigatório"),
  cnh_cliente: z
    .string()
    .length(9, "CNH deve ter 9 dígitos")
    .nonempty("CNH obrigatória"),
  dt_nasc_cliente: z
    .string()
    .nonempty("Data de nascimento obrigatória"),
  notificacoes_email: z
    .enum(["Sim", "Não"], { errorMap: () => ({ message: "Selecione Sim ou Não" }) }),
  notificacoes_mensagem: z
    .enum(["Sim", "Não"], { errorMap: () => ({ message: "Selecione Sim ou Não" }) }),
});

export default function CadastroCliente() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
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
    <main className="container mx-auto">
      <h1 className="text-5xl">Cadastro de Cliente</h1>
      <form className="w-96" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label htmlFor="nome_cliente">Nome</label>
          <input type="text" id="nome_cliente" {...register("nome_cliente")} className="rounded-sm text-lg" />
          {errors.nome_cliente && <span className="text-red-700">{errors.nome_cliente.message?.toString()}</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="nome_social_cliente">Nome Social</label>
          <input type="text" id="nome_social_cliente" {...register("nome_social_cliente")} className="rounded-sm text-lg" />
          {errors.nome_social_cliente && <span className="text-red-700">{errors.nome_social_cliente.message?.toString()}</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="cpf_cliente">CPF</label>
          <input type="text" id="cpf_cliente" {...register("cpf_cliente")} className="rounded-sm text-lg" />
          {errors.cpf_cliente && <span className="text-red-700">{errors.cpf_cliente.message?.toString()}</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="cnh_cliente">CNH</label>
          <input type="text" id="cnh_cliente" {...register("cnh_cliente")} className="rounded-sm text-lg" />
          {errors.cnh_cliente && <span className="text-red-700">{errors.cnh_cliente.message?.toString()}</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="dt_nasc_cliente">Data de Nascimento</label>
          <input type="date" id="dt_nasc_cliente" {...register("dt_nasc_cliente")} className="rounded-sm text-lg" />
          {errors.dt_nasc_cliente && <span className="text-red-700">{errors.dt_nasc_cliente.message?.toString()}</span>}
        </div>
        <div className="flex flex-col">
          <label>Notificações por E-mail</label>
          <select {...register("notificacoes_email")} className="rounded-sm text-lg">
            <option value="">Selecione</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
          {errors.notificacoes_email && <span className="text-red-700">{errors.notificacoes_email.message?.toString()}</span>}
        </div>
        <div className="flex flex-col">
          <label>Notificações por Mensagem</label>
          <select {...register("notificacoes_mensagem")} className="rounded-sm text-lg">
            <option value="">Selecione</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
          {errors.notificacoes_mensagem && <span className="text-red-700">{errors.notificacoes_mensagem.message?.toString()}</span>}
        </div>
        <button type="submit" className="bg-green-700 p-2 rounded-sm">Salvar</button>
      </form>
    </main>
  );
}
