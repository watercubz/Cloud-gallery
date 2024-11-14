const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 flex items-center justify-center">
      <div className="bg-white max-w-3xl w-full rounded-lg shadow-md p-8 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">
          Términos y Condiciones de MTAAI-core
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Descripción del Servicio
          </h2>
          <p>
            MTAAI-core (Marketing Tracking and Advertising Improvement through
            AI) es un servicio diseñado para nuevos emprendedores mediante una
            plataforma que integra inteligencia artificial. Al usar MTAAI-core,
            puedes conectar tus redes sociales, ya sea Facebook o Instagram, y
            gestionar tu publicidad con ayuda de nuestra IA.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Responsabilidades de la Cuenta
          </h2>
          <p>
            Eres responsable de mantener la confidencialidad de tu cuenta y
            contraseña. Debes aceptar la responsabilidad de todas las
            actividades que ocurran bajo tu cuenta. No puedes usar el nombre de
            otra persona sin autorización. Nos reservamos el derecho a negar el
            servicio, cancelar cuentas, o remover contenido a nuestra
            discreción.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Privacidad de la Información de la Cuenta
          </h2>
          <p>
            La privacidad de tu información es importante para nosotros. Toda la
            información que proporciones al crear una cuenta y usar el servicio
            será recopilada y protegida de acuerdo con nuestra política de
            privacidad. Al crear una cuenta, consientes el uso y transferencia
            de esta información para el almacenamiento, procesamiento y mejora
            del servicio.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Proceso de Pago</h2>
          <p>
            El proceso de pago se realiza a través de PayPal. No se realizan
            devoluciones una vez completado el pago. Al realizar un pago,
            aceptas los términos establecidos por MTAAI-core y entiendes que
            todos los cargos son definitivos.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Recopilación de Información
          </h2>
          <p>
            MTAAI-core recopilará información relacionada con el uso de la
            plataforma y el rendimiento de tu publicidad. Esta información
            incluye datos de usuario y estadísticas, y se utilizará para mejorar
            los servicios proporcionados y optimizar la efectividad de la
            publicidad.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Conducta Prohibida</h2>
          <ul className="list-disc ml-6">
            <li>Violar cualquier ley o regulación aplicable.</li>
            <li>Infringir derechos de propiedad intelectual de terceros.</li>
            <li>
              Participar en conductas fraudulentas, amenazantes, difamatorias, o
              ofensivas.
            </li>
            <li>
              Comprometer la seguridad de la cuenta de MTAAI-core o la de otros
              usuarios.
            </li>
            <li>
              Intentar hacerse pasar por el equipo de MTAAI-core o cualquier
              otro usuario.
            </li>
          </ul>
        </section>

        <section className="text-center mt-8">
          <p>
            Al utilizar MTAAI-core, confirmas que aceptas estos términos y
            condiciones. Si tienes alguna pregunta, no dudes en contactarnos.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
