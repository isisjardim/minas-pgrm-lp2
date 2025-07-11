// 1. Frete grátis 
function calculaFrete() {
  const valorTotal = Number(document.getElementById('totalInput').value);
  let mensagem;

  // Se o total for maior ou igual a 150, a mensagem deve ser 'Frete grátis! 🎉'
  if (valorTotal >= 150) {
    mensagem = 'Frete grátis! 🎉'
      // Se o total for maior ou igual a 0 (mas menor que 150), a mensagem deve ser 'Frete: R$ 20.00 😅'

  }else if (valorTotal > 0){
    mensagem = "Frete: R$ 20.00 😅"
     // Se o valor for negativo ou inválido, a mensagem deve ser 'Valor inválido.'
  } else {
    mensagem = "Valor inválido."

  }

 

  document.getElementById('shippingResult').textContent = mensagem;
}

// 2. Boas-vindas
function mensagemDeBoasVindas() {
  const tipo = document.getElementById('userInput').value;
  let mensagem;

  switch (tipo) {
    case "convidada":
      mensagem = "Oi, visitante! Crie uma conta pra ganhar descontos.";
      break;
    case "registrada":
      mensagem = "Bem-vinda de volta!";
      break;  
    case "premium":
      mensagem = "Olá, cliente premium! Frete grátis garantido.";
      break;
    case "admin":
      mensagem = "Admin logado. Painel disponível.";
      break;
    default:
      mensagem = "Tipo desconhecido.";
      break;
  }
  // Usar switch case para definir a mensagem com base no tipo:
  // - 'convidada': "Oi, visitante! Crie uma conta pra ganhar descontos."
  // - 'resgistrada': "Bem-vinda de volta!"
  // - 'premium': "Olá, cliente premium! Frete grátis garantido."
  // - 'admin': "Admin logado. Painel disponível."
  // Qualquer outro valor: "Tipo desconhecido."

  document.getElementById('userResult').textContent = mensagem;
}

// 3. Pode finalizar a compra?
function podeFazerCheckout() {
  const items   = document.getElementById('hasItems').checked;
  const pagamento = document.getElementById('paymentOk').checked;
  let mensagem;

  if(items && pagamento) {
    mensagem = 'Compra liberada 🚀';
  } else if (items || pagamento) {
    mensagem = 'Compra bloqueada. Verifique carrinho/pagamento.';
  } else{

  }  

  // Se os dois forem verdadeiros (items e pagamento), a mensagem deve ser 'Compra liberada 🚀'
  // Caso contrário, deve ser 'Compra bloqueada. Verifique carrinho/pagamento.'

  document.getElementById('checkoutResult').textContent = mensagem;
}

// 4. Desconto Especial liberado?
function temDescontoEspecial() {
  const primeiraCompra = document.getElementById('firstPurchase').checked;
  const cupomVip       = document.getElementById('hasVipCoupon').checked;
  let mensagem;
  
  if (primeiraCompra || cupomVip) {
    mensagem = 'Desconto especial aplicado! 🎁';
  } else {
    mensagem = 'Desconto não disponível.';
  }

  // Se pelo menos um for verdadeiro (primeiraCompra ou cupomVip), a mensagem deve ser 'Desconto especial aplicado! 🎁'
  // Caso contrário, deve ser 'Desconto não disponível.'

  document.getElementById('specialResult').textContent = mensagem;
}

// Listeners
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnShipping').addEventListener('click', calculaFrete);
  document.getElementById('btnUser').addEventListener('click', mensagemDeBoasVindas);
  document.getElementById('btnCheckout').addEventListener('click', podeFazerCheckout);
  document.getElementById('btnSpecial').addEventListener('click', temDescontoEspecial);
});
