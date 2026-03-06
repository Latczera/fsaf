import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Clock, 
  Award, 
  Users, 
  CheckCircle2,
  Scissors,
  Eye,
  Heart
} from 'lucide-react';

export const SERVICES = [
  {
    category: "Maquiagem",
    items: [
      { name: "Maquiagem com cílios", price: "R$ 150" },
      { name: "Maquiagem sem cílios", price: "R$ 130" },
      { name: "Maquiagem noiva", price: "R$ 160" },
    ]
  },
  {
    category: "Sobrancelhas",
    items: [
      { name: "Design simples", price: "R$ 35" },
      { name: "Design personalizado com henna", price: "R$ 60" },
      { name: "Design com tinta para sobrancelhas", price: "R$ 70" },
    ]
  },
  {
    category: "Epilação",
    items: [
      { name: "Epilação com linha egípcia (rosto)", price: "R$ 30" },
      { name: "Epilação de buço", price: "R$ 10" },
    ]
  },
  {
    category: "Cílios",
    items: [
      { name: "Extensão de cílios", price: "R$ 150" },
      { name: "Brow Lamination", price: "R$ 100" },
    ]
  },
  {
    category: "Procedimentos Avançados",
    items: [
      { name: "Nanoblading fio a fio realista", price: "R$ 450", detail: "com retoque" },
      { name: "Micropigmentação Shadow", price: "R$ 450", detail: "com retoque" },
      { name: "Revitalização labial", price: "R$ 400" },
      { name: "Pele de porcelana", price: "R$ 250", detail: "por sessão" },
    ]
  }
];

export const NAIL_SERVICES = [
  { name: "Pé e mão", price: "R$ 75" },
  { name: "Pé", price: "R$ 40" },
  { name: "Mão", price: "R$ 40" },
  { name: "Spa dos pés", price: "R$ 85" },
  { name: "Alongamento F1", price: "R$ 140" },
  { name: "Alongamento fibra de vidro", price: "R$ 150" },
  { name: "Alongamento soft gel", price: "R$ 130" },
  { name: "Esmaltação simples", price: "R$ 25" },
  { name: "Esmaltação em gel", price: "R$ 75" },
];

export const COURSES = [
  "Maquiagem profissional",
  "Auto maquiagem",
  "Design com henna + extensão de cílios",
  "Nanoblading fio a fio realista",
  "Revitalização labial",
  "Micropigmentação shadow"
];

export const TESTIMONIALS = [
  {
    name: "Mariana Silva",
    text: "Atendimento maravilhoso e resultado impecável. Minha maquiagem durou a festa inteira!",
    role: "Cliente"
  },
  {
    name: "Ana Paula",
    text: "Profissional extremamente dedicado. O design da minha sobrancelha ficou perfeito.",
    role: "Cliente"
  },
  {
    name: "Juliana Costa",
    text: "Minha autoestima mudou completamente após os procedimentos. Recomendo de olhos fechados.",
    role: "Cliente"
  }
];

export const CONTACT_INFO = {
  address: "João Sátiro de Almeida Leme 342, Centro — Angatuba / SP",
  phone: "15 99842-4844",
  email: "caiquekenson@hotmail.com",
  instagram: "https://www.instagram.com/caiquekenson/"
};
