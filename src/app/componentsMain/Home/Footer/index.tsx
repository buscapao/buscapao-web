import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-white lg:grid lg:grid-cols-5">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <Image
          src="/img/bg-main.png"
          alt="Footer background"
          fill
          className="absolute inset-0 object-cover sm:none"
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {/* Contato */}
          <div>
            <p>
              <span className="p opacity-75 tracking-wide ">
                Nossos contatos
              </span>

              <Link href="#" className="block mt-1 large">
                (11) 99999-9999
              </Link>
            </p>

            <ul className="mt-8 flex gap-6">
              <Link
                target="_black"
                href="#"
                className=" hover:opacity-75 hover:scale-110 hover:text-primary-hover transition duration-300"
              >
                <li>
                  <FaFacebook size={24} />
                </li>
              </Link>

              <Link
                href={'#'}
                className=" hover:opacity-75 hover:scale-110 hover:text-primary-hover transition duration-300"
              >
                <li>
                  <FaInstagram
                    size={24}
                    className=" hover:opacity-75 hover:scale-110 transition duration-300"
                  />
                </li>
              </Link>

              <Link target="_black" href="#">
                <li>
                  <FaLinkedin
                    size={24}
                    className=" hover:opacity-75 hover:scale-110 hover:text-primary-hover transition duration-300"
                  />
                </li>
              </Link>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Coluna 1 */}
            <div>
              <p className="p font-semibold text-gray-900">Services</p>

              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href="#"
                    className="p opacity-80 transition hover:opacity-60"
                  >
                    Lorem, ipsum.
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="p opacity-80 transition hover:opacity-60"
                  >
                    Lorem, ipsum.
                  </a>
                </li>

                <li>
                  <Link
                    href="#"
                    className="p opacity-80 transition hover:opacity-60"
                  >
                    Lorem, ipsum.
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="p opacity-80 transition hover:opacity-60"
                  >
                    Lorem, ipsum.
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="p opacity-80 transition hover:opacity-60"
                  >
                    Lorem, ipsum.
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-12">
          {/* Copyright */}
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4">
              <li>
                <Link
                  href="#"
                  className="small opacity-75 transition hover:opacity-75"
                >
                  Termos & Condições
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="small opacity-75 transition hover:opacity-75"
                >
                  Politicas de privacidade
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="small opacity-75 transition hover:opacity-75"
                >
                  Cookies
                </Link>
              </li>
            </ul>

            <p className="mt-8 small opacity-75 sm:mt-0">
              &copy; {new Date().getFullYear()}. Buscapão. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
