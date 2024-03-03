import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Buku yang melampaui zamannya\n'}
            <span className="text-hero">KITAB FIRASAT</span>
          </>
        }
        description="Jauh Sebelum Ilmuan Barat Membicarakan Soal Fisiognomi, IMAM FAKHRUDDIN AR-RAZI Adalah Pelopor Fisiognomi Dunia Pertama ( 1150-1210M ) di Tulis Sejak 1000 Tahun Lalu, Ilmu ini Banyak di Terapkan Oleh Banyak Ilmuan dan Pebisnis Hingga Saat ini, Dalam Dunia Karir Kebanyakan HRD Memilih Fisiognomi Sebagai Salah Satu Metode untuk Memahami Karakter dan Sifat Seseorang, Tidak Hanya Pebisnis dan HRD, Buku ini Juga Cocok untuk Orang Tua, Guru, Psikolog, Jurnalis, Penegak Hukum, Juga Para Pencari Pasangan Hidup."
        button={
          <Link href="https://api.whatsapp.com/send/?phone=62895338223358&text=Halo%20Saya%20Ingin%20Pesan%20Buku%20Firasat">
            <Button xl>Pesan Sekarang</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
