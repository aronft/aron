export interface Experience {
	id: string
	rangeDate: string
	position: string
	company: string
	description: string
}

interface Data {
	experiences: Experience[]
}

export const initialData: Data = {
	experiences: [
		{
			id: crypto.randomUUID(),
			rangeDate: 'Apr 2022 - Jun 2022',
			company: 'jqsystem',
			position: 'Programador full stack',
			description:
				'Mantenimiento periódico de un sistema existente, aplicando actualizaciones, correcciones y mejoras para asegurar su buen funcionamiento y la satisfacción del cliente'
		},
		{
			id: crypto.randomUUID(),
			rangeDate: 'Jul 2021 - Jan 2022',
			company: 'jqsystem',
			position: 'Programador full stack',
			description:
				'Desarrollé el módulo administrativo para el gimnasio Dantolgym, con el fin de gestionar los usuarios así como sus asistencias y control de rutinas'
		},
		{
			id: crypto.randomUUID(),
			rangeDate: 'Dec 2019 - Dec 2020',
			company: 'Universidad Nacional de Moquegua',
			position: 'Full-stack Developer',
			description:
				'Participé activamente en el desarrollo de aplicaciones web administrativas, entre las cuales se destacan proyectos como CCTIC (Centro de Capacitación en TIC) y CEID (Centro de Idiomas)'
		}
	]
}
