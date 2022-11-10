import styled from 'styled-components';
import Box from '../../components/common/Box';
import SectionTitle from '../../components/common/SectionTitle';
import { BsEnvelope } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ defaultValue: { email: '' } });

  const onSubmit = email => {
    console.log(email);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: '' });
    }
  }, [formState, reset]);

  return (
    <Box>
      <SectionTitle
        title={'Join Our Newsletter'}
        subtitle={
          '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, placeat.'
        }
      />

      <FormWrapperStyled onSubmit={handleSubmit(onSubmit)}>
        <IconWrapperStyled>
          <BsEnvelope fontSize='20px' />
        </IconWrapperStyled>
        <EmailInputStyled
          type='email'
          autoComplete='off'
          placeholder='Enter your email'
          {...register('email', {
            required: 'Email is required.',
            pattern: {
              value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
              message: 'Please enter a valid email.',
            },
          })}
          onKeyUp={() => {
            trigger('email');
          }}
        />

        <SubmitStyled type='submit'>Subscribe</SubmitStyled>
      </FormWrapperStyled>
      {errors.email && (
        <ErrorMessageStyled className='error-message'>
          {errors.email.message}
        </ErrorMessageStyled>
      )}
    </Box>
  );
};

const FormWrapperStyled = styled.form`
  height: 40px;
  display: flex;
  justify-content: center;
  margin-top: 2em;
  margin-bottom: 0.5em;
  padding-inline: 0.2em;

  &:hover > input,
  input:focus {
    width: 50%;
    max-width: 260px;
    padding: 0 1em;
    color: ${({theme}) => theme.text.dark};
  }

  &:hover ~ .error-message {
    opacity: 1;
  }
`;

const EmailInputStyled = styled.input`
  border: none;
  outline: none;
  width: 0;
  max-width: 0;
  transition: 0.6s;
`;

const ErrorMessageStyled = styled.p`
  opacity: 0;
  color: rgb(255, 0, 0, 0.8);
  text-align: center;
  transition: 0.6s;
`;

const SubmitStyled = styled.button`
  border: none;
  outline: none;
  background: #112432;
  color: ${({theme}) => theme.text.light};
  padding: 0 1em;
  text-transform: uppercase;
  cursor: pointer;
`;

const IconWrapperStyled = styled.span`
  padding: 0 0.8em;
  display: grid;
  place-items: center;
  background: #112432;
  color: ${({theme}) => theme.text.light};
`;

export default Newsletter;
