import { Link } from "react-router-dom";
import Cake from "./asset/Cake.jpeg";
import Meung from "./asset/Meung.jpeg";

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-yellow-50 flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold text-amber-900 mb-8 animate__animated animate__fadeIn">
          About Serious Bacon / เกี่ยวกับ Serious Bacon
        </h1>

        <div className="w-full max-w-4xl px-6">
          <p className="text-xl text-amber-800 mb-8 text-center animate__animated animate__fadeIn animate__delay-1s">
            Serious Bacon is a music duo formed by two talented individuals. 
            Get to know more about the members of the band and their backgrounds!
            / Serious Bacon คือวงดนตรีดูโอที่ประกอบด้วยสมาชิกสองคนที่มีความสามารถ
            มาทำความรู้จักกับสมาชิกในวงและเบื้องหลังของพวกเขา!
          </p>

          {/* ข้อมูลสมาชิกวง */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-8">
            {/* สมาชิก 1: เปมิกา จิระนารักษ์ (เค้ก) */}
            <div className="bg-yellow-100 p-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 animate__animated animate__zoomIn">
              <img
                src={Cake} // รูปของเปมิกา
                alt="เปมิกา จิระนารักษ์"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4 shadow-lg"
              />
              <h2 className="text-2xl font-semibold text-amber-800 text-center">
                เปมิกา จิระนารักษ์ (เค้ก) / Pemika Jiranaruk (Cake)
              </h2>
              <p className="text-center text-brown-700 font-medium">นักร้อง / Singer</p>
              <p className="text-center text-brown-700 italic">
                เกิด: 8 มกราคม 2541 (อายุ 27 ปี) / Born: January 8, 1998 (Age: 27)
              </p>
              <p className="text-center text-brown-700">
                คณะนิเทศศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย /
                Faculty of Communication Arts, Chulalongkorn University
              </p>

              <div className="flex justify-center gap-8 mb-6">
                <a
                  href="https://www.facebook.com/Seriousbaconband"
                  className="text-amber-800 hover:text-amber-600 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-square text-4xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/cakethy/?hl=th"
                  className="text-amber-800 hover:text-amber-600 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram text-4xl"></i>
                </a>
              </div>
            </div>

            {/* สมาชิก 2: สองเมือง ไชยฤทธิ์ (เมือง) */}
            <div className="bg-yellow-100 p-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 animate__animated animate__zoomIn">
              <img
                src={Meung} // รูปของสองเมือง
                alt="สองเมือง ไชยฤทธิ์"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4 shadow-lg"
              />
              <h2 className="text-2xl font-semibold text-amber-800 text-center">
                สองเมือง ไชยฤทธิ์ (เมือง) / Songmuang Chaiyarit (Muang)
              </h2>
              <p className="text-center text-brown-700 font-medium">
                นักร้อง, กีตาร์, เบส, กลอง, เปียโน /
                Singer, Guitar, Bass, Drums, Piano
              </p>
              <p className="text-center text-brown-700 italic">
                เกิด: 24 กุมภาพันธ์ 2543 (อายุ 25 ปี) / Born: February 24, 2000 (Age: 25)
              </p>
              <p className="text-center text-brown-700">
                คณะนิเทศศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย /
                Faculty of Communication Arts, Chulalongkorn University
              </p>
              <div className="flex justify-center gap-8 mb-6">
                <a
                  href="https://www.facebook.com/Seriousbaconband"
                  className="text-amber-800 hover:text-amber-600 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-square text-4xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/johnmuang/?hl=th"
                  className="text-amber-800 hover:text-amber-600 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram text-4xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* ช่องทางการติดต่อ */}
          <div className="bg-yellow-100 p-8 rounded-lg shadow-xl mb-8 animate__animated animate__fadeIn animate__delay-2s">
            <h2 className="text-2xl font-semibold text-amber-800 mb-6 text-center">
              Contact / ติดต่อ
            </h2>
            <p className="text-center text-brown-700 mb-4">
              You can reach us through the following channels for any inquiries
              or collaborations: / ท่านสามารถติดต่อเราผ่านช่องทางด้านล่างนี้
            </p>

            {/* เพิ่มข้อมูลการติดต่อ */}
            <div className="text-center text-brown-700 mb-4">
              <p className="font-semibold">▶ ShowBooking: / การจองโชว์:</p>
              <p>062 4949 583</p>
            </div>
            <div className="text-center text-brown-700 mb-4">
              <p className="font-semibold">▶ Marketing: / การตลาด:</p>
              <p>081 580 5270 (K.แต้ม)</p>
            </div>
            <div className="text-center text-brown-700 mb-4">
              <p className="font-semibold">▶ PR: / การประชาสัมพันธ์:</p>
              <p>083 039 6975 (K.นัท)</p>
            </div>

            <h2 className="text-2xl font-semibold text-amber-800 mb-6 text-center">
              ช่องทางการติดตาม Serious Bacon
            </h2>

            <div className="flex justify-center gap-8 mb-6">
              <a
                href="https://www.facebook.com/Seriousbaconband"
                className="text-amber-800 hover:text-amber-600 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-square text-4xl"></i>
              </a>
              <a
                href="https://www.instagram.com/seriousbaconband/?hl=th"
                className="text-amber-800 hover:text-amber-600 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-4xl"></i>
              </a>
              <a
                href="https://www.youtube.com/@seriousbaconband"
                className="text-amber-800 hover:text-amber-600 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube text-4xl"></i>
              </a>
            </div>
          </div>
        </div>

        <Link to="/">
          <h1 className="bg-amber-200 text-black py-3 px-8 rounded-lg hover:bg-amber-400 transition duration-300 animate__animated animate__bounceInUp mt-8">
            Back / กลับ
          </h1>
        </Link>
      </div>
    </>
  );
}
