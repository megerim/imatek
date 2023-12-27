export const metadata = {
  title: "İletişim | İmatek Yapı",
  description: "Anında mail gönderebilirsiniz.",
};


export default function SignUp() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-24 md:pb-12">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">İletişim</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="full-name"
                  >
                    İsminiz: <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    className="form-input w-full text-gray-300"
                    placeholder="Ad Soyad"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="company-name"
                  >
                    Şirket: <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="company-name"
                    type="text"
                    className="form-input w-full text-gray-300"
                    placeholder="Şirketinizin Adı"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Email Adresi <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full text-gray-300"
                    placeholder="ornek@mail.com"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="password"
                  >
                    Mesajınız <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="password"
                    type="textarea"
                    className="form-input w-full text-gray-300"
                    placeholder="Sağ alt köşeden genişletebilirsiniz."
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button
                    type="submit"
                    className="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
                  >
                    Gönder
                  </button>
                </div>
              </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
              imatekyapi@outlook.com{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
