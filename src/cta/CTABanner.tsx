import type { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="bg-primer flex flex-row flex-wrap items-center justify-between rounded-md p-7 text-left">
    <div className="text-2xl font-semibold">
      <div className="text-gray-900">{props.title}</div>
      <div className="text-gray-900">{props.subtitle}</div>
    </div>

    <div className="whitespace-no-wrap mt-5 text-gray-900">
      <li>Watak manusia yang berhubungan dengan 4 tahap usia</li>
      <li>Watak manusia yang berkaitan dengan letak Geografis</li>
      <li>Firasat dan Kepribadian Manusia</li>
      <li>Petunjuk dari bentuk Organ Seluruh Tubuh</li>
      <li>Watak manusia dari segi kondisi Ekonomi</li>
      <li>Metode Penarikan Kesimpulan Dalam Ilmu Firasat</li>
      <li>
        Jenis kelaminnya, Suara dan Cara Tertawanya, Nafas dan Ucapannya, Gerak
        dan Penampilannya. dan masih banyak yang lainnya
      </li>
    </div>

    <div className="whitespace-no-wrap mt-3 sm:ml-2 sm:mt-0">
      {props.button}
    </div>
  </div>
);

export { CTABanner };
