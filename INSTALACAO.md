# Primeiro baixe e instale o [node.js](https://nodejs.org/en/download/) e o [git](https://git-scm.com/downloads)

## No node instale o yarn globalmente com o comando
```npm install --global yarn```

## Instalando o yarn no windows!
As vezes o windows impede que os comandos do yarn sejam executados.
Para isso entre no Windows PowerShell como administrador e rode os seguintes comandos de uma vez...

```Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted```

Em teoria, isso é o suficiente para os scripts yarn executarem

## Configurando a ferramenta Git
`NOTA:` Tudo que está entre tags, deve ser substítuido pelos itens respectivos, dentro das mesmas. Utilize o Git Bash para as configurações.
Para as configurações iniciais execute:
  Comandos usados para indentificar os participantes na hora de um commit
  
```git config --global user.name "<nome do usuário>"```

```git config --global user.email <email do GitHub>```

### Geração da chave SSH para clone de repositórios remotos:
```ssh-keygen -t rsa -b 4096 -C "<email do GitHub>"```

### Pegando a chave SSH:
`NOTA:` Essa chave deve ser copiada no início ao fim (até o seu email) e deve ser colada no [SSH and GPG keys](https://github.com/settings/ssh/new) do GitHub

```cat ~/.ssh/id_rsa.pub```

### Inicializando o agente SSH:
```eval `ssh-agent -s` ```

```ssh-add ~/.ssh/id_rsa```

## Pronto está tudo configurado!!

Agora para clonar o repositório cole no terminal:

```git clone git@github.com:William-Reticena/programacao_de_aplicativos_front_end.git```

Na pasta do repositório clonado apenas digite `yarn` e ele irá fazer a instalação de todas as dependências 

