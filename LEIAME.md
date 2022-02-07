# directus-user-feedback

Coleção de Avaliação de Usuário (user-feedbacks) para o gerenciador de
conteúdos livre [Directus Open Source][directus]

## Sobre a coleção/tabela user-feedbacks

Uma avaliação de usuário é uma manifestação de uma pessoa (`author`) sobre uma
página do site (`subject`).

Esta avaliação possui uma pontuação (`score`) e pode conter uma mensagem
(`message`).

Outros atributos deste recurso, definidos pelo sistema, são: data de criação
(`dateCreated`) e um identificador único (`id`).

## Instalação da tabela no banco de dados

Copie o arquivo de [migration][custom-migration] da pasta `migrations`
deste repositório para a pasta `extensions/migrations` do seu projeto.

[directus]: https://github.com/directus/directus
[custom-migration]: https://docs.directus.io/extensions/migrations/
