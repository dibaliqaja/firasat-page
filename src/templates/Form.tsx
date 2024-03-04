import type { FormEvent } from 'react';
import { useEffect, useState } from 'react';

import { AppConfig } from '../utils/AppConfig';

interface FormValues {
  name: string;
  whatsapp: string;
  cityDistrict: string;
  address: string;
  quantity: number;
}

const Form = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    whatsapp: '',
    cityDistrict: '',
    address: '',
    quantity: 0,
  });

  const [uniqueCode, setUniqueCode] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const { adminWhatsapp } = AppConfig;
  const { productName } = AppConfig;
  const { productPrice } = AppConfig;

  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleQuantityChange = (change: number) => {
    setFormValues((prevValues) => {
      const newQuantity = Math.max(0, prevValues.quantity + change);
      return { ...prevValues, quantity: newQuantity };
    });
  };

  useEffect(() => {
    const newUniqueCode = Math.floor(Math.random() * 500) + 100; // Generate unique code between 100-599
    setUniqueCode(newUniqueCode);
  }, []);

  useEffect(() => {
    const newTotal = formValues.quantity * productPrice - uniqueCode;
    setTotalPrice(newTotal);
  }, [formValues.quantity, uniqueCode]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const errors: { [key: string]: string } = {};
    if (!formValues.name) errors.name = 'Nama anda perlu diisi.';
    if (!formValues.whatsapp)
      errors.whatsapp = 'Nomor WhatsApp anda perlu diisi.';
    if (!formValues.cityDistrict)
      errors.cityDistrict = 'Kota/Kecamatan perlu diisi.';
    if (!formValues.address) errors.address = 'Alamat lengkap perlu diisi.';
    if (formValues.quantity <= 0)
      errors.quantity = 'Jumlah pesanan minimal adalah 1.';

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    const message = `Halo Admin...
      %0ASaya ingin memesan ${formValues.quantity} buku "${productName}" dengan detail sebagai berikut:
      %0A- Nama: ${formValues.name}
      %0A- WhatsApp: ${formValues.whatsapp}
      %0A- Kota/Kecamatan: ${formValues.cityDistrict}
      %0A- Alamat: ${formValues.address}
      %0A- Total Harga: Rp${totalPrice.toLocaleString('id-ID')}
      %0ATerima kasih.`;

    const whatsappURL = `https://wa.me/${adminWhatsapp}?text=${message}`;
    window.open(whatsappURL, '_blank');

    setFormValues({
      name: '',
      whatsapp: '',
      cityDistrict: '',
      address: '',
      quantity: 0,
    });
    setValidationErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5 flex flex-col space-y-4">
      <input
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        placeholder="Nama Anda"
        className={`rounded-md border border-gray-400 px-4 py-2 text-gray-700 placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
          validationErrors.name ? 'border-red-500' : 'border-gray-400'
        }`}
      />
      {validationErrors.name && (
        <p className="!mt-0 text-red-500">{validationErrors.name}</p>
      )}
      <input
        type="text"
        name="whatsapp"
        value={formValues.whatsapp}
        onChange={handleChange}
        placeholder="No WhatsApp Anda"
        className={`rounded-md border border-gray-400 px-4 py-2 text-gray-700 placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
          validationErrors.whatsapp ? 'border-red-500' : 'border-gray-400'
        }`}
      />
      {validationErrors.whatsapp && (
        <p className="!mt-0 text-red-500">{validationErrors.whatsapp}</p>
      )}
      <input
        type="text"
        name="cityDistrict"
        value={formValues.cityDistrict}
        onChange={handleChange}
        placeholder="Kota/Kecamatan"
        className={`rounded-md border border-gray-400 px-4 py-2 text-gray-700 placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
          validationErrors.cityDistrict ? 'border-red-500' : 'border-gray-400'
        }`}
      />
      {validationErrors.cityDistrict && (
        <p className="!mt-0 text-red-500">{validationErrors.cityDistrict}</p>
      )}
      <textarea
        name="address"
        value={formValues.address}
        onChange={handleChange}
        placeholder="Alamat Nama Jalan/Nomor, RT/RW, Kelurahan/Desa, Kota/Kabupaten, Provinsi, Kode Pos"
        className={`h-32 rounded-md border border-gray-400 px-4 py-2 text-gray-700 placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
          validationErrors.address ? 'border-red-500' : 'border-gray-400'
        }`}
      ></textarea>
      {validationErrors.address && (
        <p className="!mt-0 text-red-500">{validationErrors.address}</p>
      )}

      <div className="flex items-center justify-evenly">
        <p className="text-lg font-semibold text-gray-800">Jumlah Pesanan</p>
        <div className="flex items-center space-x-2">
          <button
            style={{ fontSize: '17px' }}
            type="button"
            onClick={() => handleQuantityChange(-1)}
            className="rounded-md border border-gray-400 bg-white px-4 py-2 text-sm font-bold text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            -
          </button>
          <input
            style={{ fontSize: '17px', textAlign: 'center' }}
            type="number"
            name="quantity"
            value={formValues.quantity}
            readOnly
            className={`rounded-md border border-gray-400 px-4 py-2 font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              validationErrors.quantity ? 'border-red-500' : 'border-gray-400'
            }`}
          />
          <button
            style={{ fontSize: '17px' }}
            type="button"
            onClick={() => handleQuantityChange(1)}
            className="rounded-md border border-gray-400 bg-white px-4 py-2 text-sm font-bold text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            +
          </button>
        </div>
      </div>
      {validationErrors.quantity && (
        <p className="text-red-500">{validationErrors.quantity}</p>
      )}

      {/* Tampilan Rincian Pesanan */}
      <div className="rounded-md border border-gray-400 bg-white px-4 py-3 pt-4 shadow-sm">
        <p className="mb-4 font-semibold text-gray-800">RINCIAN PESANAN :</p>
        <p className="mb-4 text-gray-700">
          Kitab Firasat - Imam Fakhruddin Ar-Razi
        </p>
        <div className="mb-2 flex justify-between text-gray-600">
          <p className="text-gray-700">Kode Unik:</p>
          <p className="text-gray-700">-Rp{uniqueCode}</p>
        </div>
        <div className="flex justify-between font-bold text-gray-800">
          <p>Total:</p>
          <p>Rp{totalPrice.toLocaleString('id-ID')}</p>
        </div>
      </div>

      <button
        type="submit"
        className="flex items-center justify-center gap-3 rounded-md bg-amber-500 px-4 py-3 text-xl font-semibold text-white hover:bg-amber-600"
      >
        <svg
          version="1.1"
          viewBox="0 0 1600 1600"
          width="26"
          height="26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            transform="translate(75,134)"
            d="m0 0h216c0.33 2.31 0.66 4.62 1 7 2.64 0.33 5.28 0.66 8 1v16h8v25h8c0.33 8.25 0.66 16.5 1 25h8v25h8v17h8l1 16c474 0.495 474 0.495 958 1v8h8v-8h9v8h42v8c5.28 0.33 10.6 0.66 16 1v8h16c1.4 19.4 0.881 38.6 0 58h-7l-1 25h-8v17h-8l-1 16h-8v17h-8v16h-8l0.0352 1.69c0.0616 5.21-0.285 10.2-1.04 15.3h-8v9h-8v16h-8l0.0352 1.69c0.0616 5.21-0.285 10.2-1.04 15.3h-8v16h-8v17h-8l-1 17h-8v9h-8v16h-8l-1 17h-8v16h-8v17h-8c0.0206 1.3 0.0412 2.6 0.0625 3.94 0.0215 1.35 0.00898 2.71-0.0625 4.06-0.33 0.33-0.66 0.66-1 1h-7c-0.33 5.28-0.66 10.6-1 16h-8v17h-8l-1 16c-2.31 0.33-4.62 0.66-7 1l-1 16h-8v9h-8l-1 16h-8v17h-8v16h-8l0.0625 3.94c0.0215 1.35 0.00898 2.71-0.0625 4.06l-1 1h-7l-1 16h-8v17h-9v8h-8v9h-8v8h-8v8h-9v8h-8v9h-17v8l-541 1v7l-17 1v16h-8l0.0352 1.69c0.0616 5.21-0.285 10.2-1.04 15.3h-8v16h-8v9h-8l-1 16c-2.31 0.33-4.62 0.66-7 1l-1 8h-8v16l-8 1-1 8h-8v25h800v8h8v75h-7v25h7v17h-857v-8c-0.557 0.0116-1.11 0.0232-1.69 0.0352-5.21 0.0616-10.2-0.285-15.3-1.04v-8h-9v-8h-8v-8h-8v-9h-8v-8h-9v-16h-8v-9h-8l-1-25h-8v-58h8l1-25h8v-17h8v-16h8v-9h8l1-16h8v-9h8l-0.0352-1.69c-0.0616-5.21 0.285-10.2 1.04-15.3h8v-8h8v-17h8l1-16h8v-17h8v-25h-8v-17h-8l-1-16-8-1v-24h-8v-17h-8l-1-25h-8v-17h-8v-17h-8c-0.33-7.92-0.66-15.8-1-24h-8v-17h-8v-17h-8l-1-25h-8v-17h-8v-24h-8c-0.33-5.61-0.66-11.2-1-17h-8v-25h-8v-17h-8c-0.33-7.92-0.66-15.8-1-24h-8v-17h-8v-17h-8c-0.33-8.25-0.66-16.5-1-25h-8v-17h-8c-0.33-7.92-0.66-15.8-1-24h-7c-0.33-5.61-0.66-11.2-1-17h-8v-17h-8l-1-25h-7c-0.33-2.64-0.66-5.28-1-8-2.64-0.33-5.28-0.66-8-1v-7c-65.8-0.495-65.8-0.495-133-1v-50h8v-74zm342 258v8h-17v9h8v16h8c-0.0116 1.14-0.0232 2.29-0.0352 3.46-0.00938 1.49-0.0185 2.98-0.0273 4.47l-0.0254 2.29c-0.00863 1.93 0.0356 3.85 0.0879 5.78l1 1h8v25h8c-0.0116 1.14-0.0232 2.29-0.0352 3.46-0.00938 1.49-0.0185 2.98-0.0273 4.47-0.0126 1.13-0.0126 1.13-0.0254 2.29-0.00863 1.93 0.0356 3.85 0.0879 5.78l1 1h7l1 16h8v25h8c-0.0116 1.13-0.0232 2.27-0.0352 3.44-0.00939 1.52-0.0185 3.04-0.0273 4.56-0.0126 1.12-0.0126 1.12-0.0254 2.25-0.0218 5.01 0.372 9.79 1.09 14.7h7c0.33 5.61 0.66 11.2 1 17h8v17h8c-0.0116 1.06-0.0232 2.12-0.0352 3.22-0.0867 10.4-0.0867 10.4 1.04 20.8h7l-0.0352 1.69c-0.0616 5.21 0.285 10.2 1.04 15.3h8v25h8v17h8l-0.0352 3.18c-0.056 7.36-0.00762 14.5 1.04 21.8h8v24h8c-0.0174 0.835-0.0174 0.835-0.0352 1.69-0.0616 5.21 0.285 10.2 1.04 15.3 5.55 0.787 10.9 1.14 16.5 1.13 0.822 0.00145 1.64 0.00291 2.49 0.0044 2.75 0.00364 5.5 1.82e-4 8.24-0.00326 1.99 0.00115 3.99 0.00274 5.98 0.00473 5.47 0.00418 10.9 0.00211 16.4-9.86e-4 5.9-0.00226 11.8 0.00123 17.7 0.00398 10.9 0.00419 21.8 0.00383 32.7 0.00109 10.1-0.00252 20.1-0.00317 30.2-0.00198 0.668 7.64e-5 1.34 1.53e-4 2.02 2.31e-4 2.71 3.11e-4 5.42 6.3e-4 8.13 9.6e-4 25.4 0.00306 50.9 2.86e-4 76.3-0.0051 22.6-0.00475 45.2-0.00432 67.8 4.61e-4 25.4 0.00536 50.8 0.00748 76.1 0.00439 2.71-3.21e-4 5.41-6.34e-4 8.12-9.43e-4 0.666-7.91e-5 1.33-1.58e-4 2.02-2.4e-4 10.1-0.00114 20.1 1.92e-4 30.2 0.00272 11.4 0.0028 22.9 0.00205 34.3-0.00328 5.84-0.00263 11.7-0.00366 17.5-3.51e-4 5.34 0.00298 10.7 0.00134 16-0.00398 1.93-0.00112 3.87-5.49e-4 5.8 0.00188 2.63 0.00304 5.26-8.21e-5 7.88-0.00472 0.749 0.00234 1.5 0.00468 2.27 0.00709 5.18-0.0183 10.2-0.494 15.4-1.13v-8h8v-8h8v-17h8c0.33-2.64 0.66-5.28 1-8 2.31-0.33 4.62-0.66 7-1 0.917-5.38 1.11-10.5 1-16h8v-17h8c0.33-5.28 0.66-10.6 1-16h7c1.42-1.19 1.42-1.19 1.1-4.6-0.00667-1.49-0.0186-2.98-0.0352-4.46-0.00677-1.14-0.00677-1.14-0.0137-2.3-0.0118-1.88-0.0298-3.76-0.0488-5.64h8v-16h8v-9h8c0.832-5.72 1.12-11.2 1-17h8v-16h8c0.33-5.61 0.66-11.2 1-17h8v-16h8v-17h8c1.21-0.983 1.21-0.983 1.1-2.85-0.0116-0.731-0.0232-1.46-0.0352-2.21-0.0309-1.95-0.0309-1.95-0.0625-3.94h8v-16h8v-9h8c0.832-5.72 1.12-11.2 1-17h7c0.917-5.38 1.11-10.5 1-16h8v-17h8c0.33-5.28 0.66-10.6 1-16h7c1.42-1.19 1.42-1.19 1.1-4.6-0.00667-1.49-0.0186-2.98-0.0352-4.46l-0.0137-2.3c-0.0118-1.88-0.0298-3.76-0.0488-5.64h-8v-8h-601v8h-175v-8h-16z"
            fill="#FFFFFF"
          />
          <path
            transform="translate(1108,1200)"
            d="m0 0h42v8c0.715-0.00524 1.43-0.0105 2.17-0.0159 3.28-0.0209 6.55-0.0338 9.83-0.0466 1.13-0.00838 2.25-0.0168 3.41-0.0254 5.97-0.0174 11.7 0.17 17.6 1.09v8h17v8h9v8c5.28 0.33 10.6 0.66 16 1v16h8v8c1.3-0.0206 2.6-0.0412 3.94-0.0625 1.35-0.0215 2.71-0.00898 4.06 0.0625 1 1 1 1 1.1 2.85-0.0326 2.05-0.0651 4.1-0.0977 6.15h8v17h8c1.1 30.4 0.83 60.6 0 91h-8v17h-8c-0.33 5.28-0.66 10.6-1 16h-8v8h-8v9h-9v8h-8v8c-5.28 0.33-10.6 0.66-16 1v8h-17v8h-84v-8h-24v-8c-1.95 0.0309-1.95 0.0309-3.94 0.0625-1.35 0.0215-2.71 0.00898-4.06-0.0625l-1-1v-8h-16v-8h-8c-0.33-5.28-0.66-10.6-1-16h-8v-9h-8c-0.33-5.28-0.66-10.6-1-16-2.31-0.33-4.62-0.66-7-1-1.33-7.97-1.09-15.9-1-24h-8v-51h8c-0.0116-1.05-0.0232-2.1-0.0352-3.18-0.056-7.36-0.00762-14.5 1.04-21.8h8v-16h8v-9h8c0.33-5.28 0.66-10.6 1-16h8v-8c7.92-0.495 7.92-0.495 16-1v-8h9v-8h8v-8c11-0.831 21.9-1.12 33-1v-8z"
            fill="#FFFFFF"
          />
          <path
            transform="translate(441,1200)"
            d="m0 0h42v8c1.56-0.0174 1.56-0.0174 3.16-0.0352 9.99-0.0751 19.9 0.284 29.8 1.04 0.33 2.31 0.66 4.62 1 7 5.28 0.33 10.6 0.66 16 1v8h9v8h8v8c1.3-0.0206 2.6-0.0412 3.94-0.0625 1.35-0.0215 2.71-0.00898 4.06 0.0625 1 1 1 1 1.1 2.85-0.0326 2.05-0.0651 4.1-0.0977 6.15h8v8h8v9h8v16h8c1.29 15.3 1.15 30.6 1.13 46-0.00574 3.78-0.00238 7.56 0.00357 11.3 0.00363 2.95 0.00246 5.89-1.28e-4 8.84-6.6e-4 1.39 1.28e-4 2.79 0.00248 4.18 0.00964 7.3-0.142 14.4-1.14 21.7h-7c-0.33 5.61-0.66 11.2-1 17h-8v16h-9v8h-8v9h-8v8h-9v8c-5.28 0.33-10.6 0.66-16 1v8h-17v8h-83v-8h-25v-9h-8c-0.495-3.46-0.495-3.46-1-7-2.64-0.33-5.28-0.66-8-1v-8h-8v-8h-8c-0.33-2.64-0.66-5.28-1-8-2.31-0.33-4.62-0.66-7-1v-8h-9v-17h-8c-0.33-7.92-0.66-15.8-1-24-2.31-0.33-4.62-0.66-7-1v-50h7c0.33-8.25 0.66-16.5 1-25h8v-16h8c-0.0206-1.3-0.0412-2.6-0.0625-3.94-0.0215-1.35-0.00898-2.71 0.0625-4.06 0.33-0.33 0.66-0.66 1-1h8v-16h8v-8c2.64-0.33 5.28-0.66 8-1 0.33-2.64 0.66-5.28 1-8h16v-8h9v-8c6.86-1.06 13.6-1.12 20.5-1.06 1.66 0.00677 1.66 0.00677 3.36 0.0137 2.71 0.0117 5.43 0.0281 8.14 0.0488v-8z"
            fill="#FFFFFF"
          />
        </svg>
        Beli Sekarang
      </button>
    </form>
  );
};

export default Form;
