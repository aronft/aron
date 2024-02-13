export interface Experience {
	id: string
	rangeDate: string
	position: string
	company: string
	description: string
}

type TAG = {
	name: string
	icon: string
	className?: string
}

const TAGS: Record<string, TAG> = {
	ANGULAR: {
		name: 'Angular',
		icon: 'angular'
	},
	CSS: {
		name: 'CSS',
		icon: 'css'
	},
	HTML: {
		name: 'HTML',
		icon: 'html',
		className: 'bg-amber-200'
	},
	MYSQL: {
		name: 'MySQL',
		icon: 'mysql'
	},
	SASS: {
		name: 'SASS',
		icon: 'sass',
		className: 'bg-gray-100'
	},
	LARAVEL: {
		name: 'Laravel',
		icon: 'laravel'
	},
	JAVASCRIPT: {
		name: 'JavaScript',
		icon: 'javascript'
	},
	SQLSERVER: {
		name: 'Microsoft SQL Server',
		icon: 'sql-server',
		className: 'bg-sky-200'
	},
	GIT: {
		name: 'Git',
		icon: 'git',
		className: 'bg-green-300'
	},
	TYPESCRIPT: {
		name: 'TypeScript',
		icon: 'typescript'
	}
}

export interface Project {
	id: string
	image: string
	title: string
	description: string
	previewUrl: string
	github?: string
	tags: TAG[]
}

interface Data {
	experiences: Experience[]
	projects: Project[]
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
	],
	projects: [
		{
			id: crypto.randomUUID(),
			title: 'Sistema de Gestión dantol-gym',
			description:
				'Plataforma completa para administrar clientes, inscripciones, reservas y rutinas de entrenamiento. Simplificando su gestión y optimizando su rendimiento.',
			image: '/projects/dantol-gym.jpg',
			previewUrl: '',
			tags: [TAGS.ANGULAR, TAGS.CSS, TAGS.HTML, TAGS.SASS, TAGS.MYSQL, TAGS.TYPESCRIPT],
			github: ''
		},
		{
			id: crypto.randomUUID(),
			title: 'Sistema de Gestión Académica - CEID',
			description:
				'Plataforma para gestionar eficientemente la administración académica de idiomas, facilitando inscripciones, evaluaciones, asistencias, certificados, facilitando el seguimiento del desarrollo académico.',
			image: '/projects/ceid.jpg',
			previewUrl: '',
			tags: [
				TAGS.ANGULAR,
				TAGS.HTML,
				TAGS.SASS,
				TAGS.GIT,
				TAGS.SQLSERVER,
				TAGS.TYPESCRIPT,
				TAGS.LARAVEL
			],
			github: ''
		},
		{
			id: crypto.randomUUID(),
			title: 'Sistema de Gestión Académica - CCTIC',
			description:
				'Software para la gestión académica en el Centro de Capacitación en TIC, simplificando las inscripciones, monitoreo del avance y generacion de certificados y gestión de planes académicos.',
			image: '/projects/cctic.jpg',
			previewUrl: '',
			tags: [
				TAGS.ANGULAR,
				TAGS.HTML,
				TAGS.SASS,
				TAGS.GIT,
				TAGS.SQLSERVER,
				TAGS.TYPESCRIPT,
				TAGS.LARAVEL
			],
			github: ''
		}
	]
}
