// Configuração da página "Torne-se uma Empresa Fundadora".
// Edite apenas este arquivo para trocar canal de contato, mensagem e condições comerciais.
// PENDENTE: validar canal, mensagem e condições com a equipe comercial antes de publicar.
window.FUNDADORAS_CONFIG = {
    // WhatsApp comercial, somente dígitos com DDI (ex.: "5548999999999"). Usado nos contatos alternativos com whatsapp: true.
    whatsappNumber: "5548996537789",
    // E-mail comercial: canal do botão principal "Quero ser uma Empresa Fundadora".
    email: "comercial@beseen.app.br",
    // Contatos alternativos exibidos na página (rótulo + link). Lista vazia oculta o bloco.
    alternativeContacts: [
        { label: "Falar com Adriano Giovan no WhatsApp: (48) 99653-7789", whatsapp: true },
        { label: "@beseenoficial no Instagram", url: "https://www.instagram.com/beseenoficial/" }
    ],
    // Mensagem pré-preenchida do CTA.
    message: "Olá! Conheci o convite para Empresas Fundadoras do BeSeen e gostaria de saber mais sobre a proposta.",
    emailSubject: "BeSeen - Interesse em ser Empresa Fundadora",
    // Só ligar após confirmação da equipe comercial:
    showExclusivity: false,   // exclusividade por segmento
    showLimitedGroup: false,  // grupo limitado de 10 empresas
    limitedGroupSize: 10
};
