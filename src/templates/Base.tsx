import Link from 'next/link';

import { Button } from '@/button/Button';

import { DetailBanner } from '../detail/DetailBanner';
import { VerticalContentRow } from '../feature/VerticalContentRow';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
import Form from './Form';
import { Hero } from './Hero';
import { VerticalContent } from './VerticalContent';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalContent />
    <Section>
      <DetailBanner
        title="Buku ini membahas berbagai Metode dan Teknik untuk memahami Karakter dan Rehasia Kepribadian Seseorang,"
        subtitle="antara lain :"
      />
    </Section>
    <Section
      title="Kenapa Kamu Wajib Membaca Buku Ini"
      description="Memperluas Pemahaman Komunikasi Nonverbal, Meningkatkan Keterampilan Komunikasi, Memahami Pikiran dan Perasaan dengan Lebih Akurat, Membuka Jendela ke Dunia Emosi, Menghindari Kesalah pahaman, Mengetahui sifat dan karakter seseorang."
    >
      <VerticalContentRow
        image="/assets/images/image_best.webp"
        imageAlt="Best Seller"
      />
      <div
        className="mx-auto my-12 text-center text-xl"
        style={{ width: '80%' }}
      >
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
          <span>Jenis Edisi : Edisi Reguler (Terbaru)</span>
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
      <Link href="#form-checkout">
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

    <div style={{ width: '80%' }} className="mx-auto">
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
            <em>Sangat bagus mudah dipelajari dan mudah dimengerti.</em>
          </p>
          <p style={{ paddingBottom: '1rem' }}>
            <strong>Siti Munawaroh</strong> - Jawa Tengah
          </p>
        </div>
      </blockquote>
    </div>

    <div className="mx-auto mt-12" style={{ width: '80%' }}>
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

    <div
      className="mx-auto mt-20 max-w-screen-lg px-3"
      style={{ width: '90%' }}
    >
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
          Harga Normal{' '}
          <s>Rp {AppConfig.productPriceNormal.toLocaleString('id-ID')}</s>
          <br />
          <em>
            Spesial Hari Ini <br />
          </em>
          hanya{' '}
          <strong
            style={{ color: 'rgb(160 196 19)', textDecoration: 'underline' }}
          >
            Rp {AppConfig.productPrice.toLocaleString('id-ID')}
          </strong>
        </h2>
      </div>

      <VerticalContentRow
        image="/assets/images/images_guarantee.webp"
        imageAlt="Image Guarantee"
      />
    </div>

    <div
      className="mx-auto mt-20 max-w-screen-lg px-3"
      id="form-checkout"
      style={{ width: '90%' }}
    >
      <div className="text-center">
        <h2
          className="text-xl font-bold text-gray-900"
          style={{ padding: '20px' }}
        >
          SILAHKAN MENGISI DATA DIBAWAH UNTUK PEMESANAN BUKU
        </h2>
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-900">
          <em>FORMULIR PEMESANAN</em>
        </h2>
      </div>

      <Form />
    </div>

    <div style={{ marginBottom: '5rem' }}></div>
  </div>
);

export { Base };
