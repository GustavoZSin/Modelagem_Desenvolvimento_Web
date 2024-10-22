---

### Tipo: **localStorage**

1. **Como é o funcionamento?**
   - Os dados armazenados no `localStorage` permanecem mesmo após o fechamento da aba ou navegador, permitindo que as informações sejam persistentes até serem explicitamente removidas.

2. **Em que cenários essa estratégia é recomendada?**
   - Ideal para armazenar preferências do usuário, como temas ou tokens de autenticação.
   - Armazenar dados persistentes no lado do cliente, como configurações de idioma ou histórico local.

3. **Quais são as vantagens do uso?**
   - Mantém as informações mesmo após o navegador ser fechado.
   - Ampla compatibilidade entre navegadores.

4. **Quais são as restrições do uso?**
   - Armazenamento máximo entre 5-10MB, dependendo do navegador.
   - Não é seguro para armazenar dados sensíveis.
   - Dados não expiram automaticamente, podendo acumular.

5. **Exemplo de implementação:**
   - **Spotify Web Player**: Armazena preferências do usuário e status de reprodução.
   - **Netflix**: Armazena progresso de vídeos e sessões de visualização recentes.

---

### Tipo: **sessionStorage**

1. **Como é o funcionamento?**
   - Os dados são armazenados apenas durante a sessão da aba do navegador. São removidos ao fechar a aba, sendo útil para informações temporárias.

2. **Em que cenários essa estratégia é recomendada?**
   - Armazenamento temporário de dados que só precisam existir durante uma sessão de navegação, como dados sensíveis ou estados de formulários.

3. **Quais são as vantagens do uso?**
   - Mais seguro para dados temporários.
   - Cada aba possui seu próprio armazenamento isolado.

4. **Quais são as restrições do uso?**
   - Dados são perdidos ao fechar a aba.
   - Não compartilha dados entre abas ou janelas.

5. **Exemplo de implementação:**
   - **Sites de e-commerce**: Armazenar estados temporários de formulários de checkout.
   - **Aplicações de reserva de viagens**: Manter o progresso durante o processo de reserva.

---

### Tipo: **Cookies**

1. **Como é o funcionamento?**
   - Pequenos pedaços de dados armazenados pelo navegador e enviados automaticamente com as requisições HTTP ao servidor.

2. **Em que cenários essa estratégia é recomendada?**
   - Autenticação, rastreamento de sessões, preferências do usuário e análises de terceiros.

3. **Quais são as vantagens do uso?**
   - Data de expiração configurável.
   - Enviados automaticamente ao servidor, facilitando autenticação e manutenção de estado.

4. **Quais são as restrições do uso?**
   - Capacidade limitada a 4KB por cookie.
   - Podem representar riscos de segurança (ex.: roubo de sessão).
   - Visíveis tanto para o cliente quanto para o servidor.

5. **Exemplo de implementação:**
   - **Facebook**, **Google**, **Amazon**: Armazenam tokens de login e informações de sessão.
   - **Sites de e-commerce**: Mantêm o estado do carrinho de compras entre páginas e sessões.

---

### Tipo: **IndexedDB**

1. **Como é o funcionamento?**
   - Banco de dados NoSQL local no navegador que permite o armazenamento de grandes volumes de dados estruturados, operando de forma assíncrona.

2. **Em que cenários essa estratégia é recomendada?**
   - Armazenar grandes volumes de dados no cliente para aplicativos que precisam funcionar offline ou para cache avançado.

3. **Quais são as vantagens do uso?**
   - Capacidade muito maior que `localStorage` ou `sessionStorage`.
   - Suporta consultas complexas e transações.

4. **Quais são as restrições do uso?**
   - Mais complexo de implementar.
   - A API é assíncrona, requerendo o uso de `promises` ou `callbacks`.

5. **Exemplo de implementação:**
   - **Google Drive** e **Gmail** (modo offline): Armazenam e-mails e documentos para acesso offline.
   - **Spotify** e **YouTube**: Cache de músicas e vídeos para melhorar desempenho e permitir funcionalidade offline.

---

- Grupo 4