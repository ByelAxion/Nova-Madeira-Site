# Nova Madeira — site completo

Site institucional responsivo para **Nova Madeira — Marcenaria e Móveis Planejados**.

## Stack

- Frontend: React + TypeScript + Vite + CSS3
- Backend: Java 17 + Spring Boot + Spring Mail
- Banco de dados: não utilizado

## Estrutura

```text
nova-madeira-site/
├── frontend/
│   ├── src/
│   │   ├── assets/                 # logo e 10 imagens fornecidas
│   │   ├── components/
│   │   ├── sections/
│   │   └── styles/
│   ├── .env.example
│   └── package.json
├── backend/
│   ├── src/main/java/br/com/novamadeira/api/
│   ├── src/main/resources/application.properties
│   ├── .env.example
│   └── pom.xml
└── README.md
```

## 1. Rodar o frontend

Requisitos: Node.js 20+ recomendado.

```bash
cd frontend
npm install
npm run dev
```

Abra o endereço mostrado pelo Vite (normalmente `http://localhost:5173`).

Se o backend estiver em outro endereço, crie `frontend/.env`:

```env
VITE_API_URL=http://localhost:8080
```

## 2. Rodar o backend

Requisitos: Java 17+ e Maven.

Configure as variáveis de SMTP no ambiente antes de iniciar. O backend **não armazena senha no código**.

PowerShell (Windows):

```powershell
$env:SMTP_HOST="smtp.gmail.com"
$env:SMTP_PORT="587"
$env:SMTP_USERNAME="seu-email-de-envio@gmail.com"
$env:SMTP_PASSWORD="sua-senha-de-app"
$env:CONTACT_RECIPIENT="novamadeiraplanejados@gmail.com"
```

Depois:

```bash
cd backend
mvn spring-boot:run
```

O endpoint de contato será:

```text
POST http://localhost:8080/api/contact
```

O frontend já envia para esse endpoint.

### Gmail

Para uma conta Google, use uma **Senha de app** quando a conta tiver autenticação em duas etapas. Não use a senha normal da conta e nunca publique essa credencial no GitHub.

## 3. Substituir logo e imagens

A logo real enviada está em:

```text
frontend/public/images/logo.png
```

As mesmas imagens também ficam em `frontend/src/assets/` para uso pelos componentes React.

As dez imagens enviadas estão nomeadas como:

```text
service-01-cozinha.jpg
service-02-guarda-roupa.jpg
service-03-closet.jpg
service-04-quarto.jpg
service-05-painel-tv.jpg
service-06-home-office.jpg
service-07-sala.jpg
service-08-banheiro.jpg
service-09-sob-medida.jpg
service-10-outro-ambiente.jpg
```

Para trocar uma imagem, substitua o arquivo mantendo o mesmo nome e formato, ou altere o caminho em `frontend/src/data.ts`.

A imagem de cada card usa `object-fit: cover`, portanto ela não é deformada. O enquadramento pode cortar as bordas para manter o card proporcional.

## 4. Build para produção

Frontend:

```bash
cd frontend
npm run build
```

Os arquivos de produção ficam em `frontend/dist`.

Backend:

```bash
cd backend
mvn clean package
java -jar target/nova-madeira-api-1.0.0.jar
```

## Dados configurados

- Nome: Nova Madeira
- Endereço: Rua Nova Brasilia nº668
- E-mail: novamadeiraplanejados@gmail.com
- WhatsApp: +55 11 91486-7169
- Instagram: https://www.instagram.com/novamadeiraplanejados

Não foram adicionados números de clientes, prêmios, certificações, avaliações ou anos de experiência que não foram fornecidos.
