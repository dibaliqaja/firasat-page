import Link from 'next/link';

import { Button } from '@/button/Button';

import { VerticalContentRow } from '../feature/VerticalContentRow';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Hero } from './Hero';
import { VerticalContent } from './VerticalContent';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalContent />
    <Banner />
    <Section
      title="Kenapa Kamu Wajib Membaca Buku Ini"
      description="Memperluas Pemahaman Komunikasi Nonverbal, Meningkatkan Keterampilan Komunikasi, Memahami Pikiran dan Perasaan dengan Lebih Akurat, Membuka Jendela ke Dunia Emosi, Menghindari Kesalah pahaman, Mengetahui sifat dan karakter seseorang."
    >
      <VerticalContentRow
        image="/assets/images/image_best.webp"
        imageAlt="Best Seller"
        title={''}
        description={''}
      />
      <div className="my-12 text-center text-xl">
        Fakta di atas menegaskan bahwa buku ini sangat otoritatif untuk dibaca.
        Tak mudah mengenal karakter seseorang tanpa landasan ilmu yang benar dan
        tepat. Tentu kita tak mau gambling dalam hal ini. Reputasi kita
        taruhannya. Selamat membaca buku yang penuh dengan fakta-fakta
        mencengangkan ini!
      </div>
    </Section>

    <div className="mx-auto max-w-screen-lg px-3">
      <div className="mb-12 text-center">
        <h2
          className="text-4xl font-bold text-gray-900"
          style={{ backgroundColor: 'rgb(205, 220, 57)', padding: '20px' }}
        >
          Detail Buku
        </h2>
      </div>
    </div>

    <VerticalContentRow
      image="/assets/images/image_content.webp"
      imageAlt="Image Content"
      title={''}
      description={''}
    />

    <div className="list">
      <h2>Harga Diskon Tertera di Halaman (Bawah)</h2>
      <ul>
        <li>
          <span>Bahasa : Indonesia</span>
        </li>
        <li>
          <span>Jenis Cover : Soft Cover</span>
        </li>
        <li>
          <span>Jenis Edisi : Edisi Reguler ( Terbaru )</span>
        </li>
        <li>
          <span>Penulis : Imam Fakhruddin Ar-Razi</span>
        </li>
        <li>
          <span>Ukuran : 14 x 21 cm</span>
        </li>
        <li>
          <span>Tebal : 208 Halaman</span>
        </li>
        <li>
          <span>ISBN : 978-602-1583-17-3</span>
        </li>
        <li>
          <span>Kertas Bookpaper</span>
        </li>
      </ul>
    </div>
    <div className="mb-12 mt-7 text-center">
      <Link href="https://api.whatsapp.com/send/?phone=62895338223358&text=Halo%20Saya%20Ingin%20Pesan%20Buku%20Firasat">
        <Button xl>Pesan Sekarang</Button>
      </Link>
    </div>

    <div className="mx-auto max-w-screen-lg px-3">
      <div className="mb-12 text-center">
        <h2
          className="text-4xl font-bold text-gray-900"
          style={{ backgroundColor: 'rgb(205, 220, 57)', padding: '20px' }}
        >
          Testimoni Pembaca
        </h2>
      </div>
    </div>

    <div>
      <blockquote className="mt-1 text-center">
        <span className="quote-icon text-center">
          <svg
            aria-hidden="true"
            focusable="false"
            role="presentation"
            viewBox="0 0 41 35"
            width="24"
            height="24"
          >
            <path
              d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"
              fill="#000"
            ></path>
          </svg>
        </span>
        <div
          className="my-3"
          style={{ lineHeight: '2rem', borderBottom: 'solid 1.5px #000000' }}
        >
          <p>
            <em>Sangat bagus mudah dipelajari dan mudah dimengeri.</em>
          </p>
          <p style={{ paddingBottom: '1rem' }}>
            <strong>Siti Munawaroh</strong> - Jawa Tengah
          </p>
        </div>
      </blockquote>
    </div>

    <div className="mt-12">
      <blockquote className="mt-1 text-center">
        <span className="quote-icon text-center">
          <svg
            aria-hidden="true"
            focusable="false"
            role="presentation"
            viewBox="0 0 41 35"
            width="24"
            height="24"
          >
            <path
              d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"
              fill="#000"
            ></path>
          </svg>
        </span>
        <div
          className="my-3"
          style={{ lineHeight: '2rem', borderBottom: 'solid 1.5px #000000' }}
        >
          <p>
            <em>
              Sangat direkomendasikan dan sangat bermanfaat untuk bahan
              pembelajaran dalam kehidupan.
            </em>
          </p>
          <p style={{ paddingBottom: '1rem' }}>
            <strong>Ayuningtyas</strong> - Surabaya
          </p>
        </div>
      </blockquote>
    </div>

    <div className="mx-auto mt-20 max-w-screen-lg px-3">
      <div className="mb-5 text-center">
        <h2
          className="text-4xl font-bold text-gray-900"
          style={{ padding: '20px' }}
        >
          MILIKI BUKU INI SEGERA DAN SEMOGA MENJADI INVESTASI DI MASA DEPAN ANDA
        </h2>
      </div>
      <div className="mt-5 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Harga Normal <s style={{ color: 'rgb(167 180 43)' }}>Rp 350.000</s>
          <br />
          <strong> </strong>
          <em>
            Spesial Hari Ini <br />
          </em>
          hanya <strong>Rp 149.999</strong>
        </h2>
      </div>

      <VerticalContentRow
        image="/assets/images/images_guarantee.webp"
        imageAlt="Image Guarantee"
        title={''}
        description={''}
      />
    </div>

    <div style={{ marginBottom: '5rem' }}></div>
  </div>
);

export { Base };