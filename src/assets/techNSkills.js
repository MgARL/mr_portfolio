import { BsDatabaseFillGear } from "react-icons/bs";
import { BiLogoPostgresql } from "react-icons/bi";
import { GiStairsGoal } from "react-icons/gi";
import { FaHeadSideVirus, FaMagnifyingGlass } from "react-icons/fa6";
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import {
	SiJavascript,
	SiExpress,
	SiSequelize,
	SiGit,
    SiCsharp,
    SiDotnet,
    SiAzuredevops,
    SiMicrosoftazure,
    SiMicrosoftsqlserver
} from 'react-icons/si';

const skillsArray = [
	{
		name: 'C# Programming',
		logo: <SiCsharp size='3em' />,
	},
	{
		name: 'ASP.NET Framework',
		logo: <SiDotnet size='3em' />,
	},
	{
		name: 'Azure DevOps',
		logo: <SiAzuredevops size='3em' />,
	},
	{
		name: 'Microsoft Azure',
		logo: <SiMicrosoftazure size='3em' />,
	},
	{
		name: 'Microsoft SQL Server',
		logo: <SiMicrosoftsqlserver size='3em' />,
	},
	{
		name: 'Dapper',
		logo: <BsDatabaseFillGear size='3em' />,
	},
	{
		name: 'HTML5',
		logo: <AiFillHtml5 size='3em' />,
	},
	{
		name: 'CSS3',
		logo: <FaCss3Alt size='3em' />,
	},
	{
		name: 'JavaScript',
		logo: <SiJavascript size='3em' />,
	},
	{
		name: 'ReactJS',
		logo: <FaReact size='3em' />,
	},
	{
		name: 'NodeJS',
		logo: <FaNodeJs size='3em' />,
	},
	{
		name: 'ExpressJS',
		logo: <SiExpress size='3em' />,
	},{
		name: 'PostgreSQL',
		logo: <BiLogoPostgresql size='3em' />,
	},
	{
		name: 'SequelizeORM',
		logo: <SiSequelize size='3em' />,
	},
	{
		name: 'git',
		logo: <SiGit size='3em' />,
	},
	{
		name: 'Github',
		logo: <AiFillGithub size='3em' />,
	},
	{
		name: 'Bootstrap',
		logo: <FaBootstrap size='3em' />,
	},
	{
		name: 'Problem Solver',
		logo: <FaHeadSideVirus size='3em' />,
	},
	{
		name: 'Goal Oriented',
		logo: <GiStairsGoal size='3em' />,
	},
	{
		name: 'Detail Oriented',
		logo: <FaMagnifyingGlass size='3em' />,
	},
];

export default skillsArray;
