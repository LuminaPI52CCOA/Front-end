import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import * as S from './styles';

const CadastroPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Aqui você faria a integração com Axios ou Fetch futuramente
    console.log('Dados do formulário validados e prontos:', data);
    alert('Cadastro realizado com sucesso! Verifique o console (F12).');
  };

  const cargoOptions = [
    { value: 'recepcionista', label: 'Recepcionista' },
    { value: 'dentista', label: 'Dentista' },
    { value: 'admin', label: 'Administrador' }
  ];

  return (
    <S.Container>
      <S.Card>
        <S.Header>
          <S.Logo>LOGO AQUI</S.Logo> 
          <S.Title>Cadastro</S.Title>
        </S.Header>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="CPF:"
            placeholder="000.000.000-00"
            mask="cpf"
            error={errors.cpf?.message}
            {...register('cpf', { 
              required: 'O CPF é obrigatório',
              minLength: { value: 14, message: 'CPF incompleto' }
            })}
          />

          <Input
            label="Email:"
            type="email"
            placeholder="seu.email@exemplo.com"
            error={errors.email?.message}
            {...register('email', { 
              required: 'O e-mail é obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'E-mail inválido'
              }
            })}
          />

          <Input
            label="Senha:"
            type="password"
            placeholder="••••••••"
            error={errors.senha?.message}
            {...register('senha', { 
              required: 'A senha é obrigatória',
              minLength: { value: 6, message: 'Mínimo de 6 caracteres' }
            })}
          />

          <Select
            label="Cargo:"
            options={cargoOptions}
            {...register('cargo')}
          />

          <Button type="submit" icon="→">
            Cadastrar
          </Button>
        </form>

        <S.FooterText>
          Já possui conta? <a href="/login">Fazer Login</a>
        </S.FooterText>
      </S.Card>
    </S.Container>
  );
};

export default CadastroPage;