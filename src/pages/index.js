import Layout from '@/components/shared/Layout/Layout'
import Confetti from '@/components/Confetti/Confetti'

function Home({ dataHolidays }) {
  const {
    isHolidayToday,
    nextHoliday: {
      holidayCountNext,
      holidayLocaleDate,
      holidayName
    }
  } = dataHolidays

  const pluralizeFalta = holidayCountNext > 1 ? 'faltan' : 'falta'
  const pluralizeDia = holidayCountNext > 1 ? 'días' : 'día'

  return (
    <Layout
      title="¿Es festivo en Colombia?"
      description="Todos los feriados/festivos en Colombia"
    >
      {isHolidayToday
        ? <Confetti />
        : null
      }
      <h1>¿Es festivo en Colombia?</h1>
      <>
        {isHolidayToday
          ? (
            <>
              <h2>¡Sí!</h2>
              <h3>¡Hoy es festivo y celebramos: {holidayName}!</h3>
            </>
          ) : (
            <>
              <h2>¡No!</h2>
              <h3>Aún {pluralizeFalta} {holidayCountNext} {pluralizeDia}</h3>
              <h3>El próximo festivo es el día {holidayLocaleDate} y celebramos: {holidayName}</h3>
            </>
          )
        }
      </>
    </Layout>
  )
}

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/colholidays`)
    const dataHolidays = await res.json()

    return {
      props: {
        dataHolidays
      }
    }
  } catch (e) {
    return {
      notFound: true
    }
  }
}

export default Home
