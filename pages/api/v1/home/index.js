import getDaysMonth from "infra/days";

async function home(req, res) {
    const diasSemana = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado", "domingo"]
    const jan2025 = getDaysMonth(2025, 1);
    
    const jan2025Value = jan2025.map(d => d.toLocaleDateString('pt-BR'));

    res.status(200).json({
        dias_semana: diasSemana,
        jan_2025: jan2025Value
    })
}

export default home;