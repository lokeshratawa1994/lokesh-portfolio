import adobeXd from '@/public/adobe-xd.svg';
import adobeaudition from '@/public/adobeaudition.svg';
import afterEffects from '@/public/after-effects.svg';
import angular from '@/public/angular.svg';
import aws from '@/public/aws.svg';
import azure from '@/public/azure.svg';
import blender from '@/public/blender.svg';
import bootstrap from '@/public/bootstrap.svg';
import bulma from '@/public/bulma.svg';
import c from '@/public/c.svg';
import canva from '@/public/canva.svg';
import capacitorjs from '@/public/capacitorjs.svg';
import coffeescript from '@/public/coffeescript.svg';
import cplusplus from '@/public/cplusplus.svg';
import csharp from '@/public/csharp.svg';
import css from '@/public/css.svg';
import dart from '@/public/dart.svg';
import deno from '@/public/deno.svg';
import django from '@/public/django.svg';
import docker from '@/public/docker.svg';
import fastify from '@/public/fastify.svg';
import figma from '@/public/figma.svg';
import firebase from '@/public/firebase.svg';
import flutter from '@/public/flutter.svg';
import gcp from '@/public/gcp.svg';
import gimp from '@/public/gimp.svg';
import git from '@/public/git.svg';
import go from '@/public/go.svg';
import graphql from '@/public/graphql.svg';
import haxe from '@/public/haxe.svg';
import html from '@/public/html.svg';
import illustrator from '@/public/illustrator.svg';
import ionic from '@/public/ionic.svg';
import java from '@/public/java.svg';
import javascript from '@/public/javascript.svg';
import julia from '@/public/julia.svg';
import kotlin from '@/public/kotlin.svg';
import lightroom from '@/public/lightroom.svg';
import markdown from '@/public/markdown.svg';
import materialui from '@/public/materialui.svg';
import matlab from '@/public/matlab.svg';
import memsql from '@/public/memsql.svg';
import microsoftoffice from '@/public/microsoftoffice.svg';
import mongoDB from '@/public/mongoDB.svg';
import mysql from '@/public/mysql.svg';
import nextJS from '@/public/nextJS.svg';
import nginx from '@/public/nginx.svg';
import numpy from '@/public/numpy.svg';
import nuxtJS from '@/public/nuxtJS.svg';
import opencv from '@/public/opencv.svg';
import photoshop from '@/public/photoshop.svg';
import php from '@/public/php.svg';
import picsart from '@/public/picsart.svg';
import postgresql from '@/public/postgresql.svg';
import premierepro from '@/public/premierepro.svg';
import python from '@/public/python.svg';
import pytorch from '@/public/pytorch.svg';
import react from '@/public/react.svg';
import ruby from '@/public/ruby.svg';
import selenium from '@/public/selenium.svg';
import sketch from '@/public/sketch.svg';
import strapi from '@/public/strapi.svg';
import svelte from '@/public/svelte.svg';
import swift from '@/public/swift.svg';
import tailwind from '@/public/tailwind.svg';
import tensorflow from '@/public/tensorflow.svg';
import typescript from '@/public/typescript.svg';
import unity from '@/public/unity.svg';
import vitejs from '@/public/vitejs.svg';
import vue from '@/public/vue.svg';
import vuetifyjs from '@/public/vuetifyjs.svg';
import webix from '@/public/webix.svg';
import wolframalpha from '@/public/wolframalpha.svg';
import wordpress from '@/public/wordpress.svg';

import pandas from '@/public/pandas.svg';
import scikitlearn from '@/public/scikit-learn.svg';
import dotnet from '@/public/dotnet.svg';
import dotnetcore from '@/public/dotnetcore.svg'
import kubernetes from '@/public/kubernetes.svg'
import linux from '@/public/linux.svg'
import sqlalchemy from '@/public/sqlalchemy.svg'
import fastapi from '@/public/fastapi.svg'



export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'gcp':
      return gcp;
    case 'html':
      return html;
    case 'photoshop':
      return photoshop;
    case 'docker':
      return docker;
    case 'illustrator':
      return illustrator;
    case 'adobe xd':
      return adobeXd;
    case 'after effects':
      return afterEffects;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'nuxt js':
      return nuxtJS;
    case 'react':
      return react;
    case 'svelte':
      return svelte;
    case 'typescript':
      return typescript;
    case 'vue':
      return vue;
    case 'bootstrap':
      return bootstrap;
    case 'bulma':
      return bulma;
    case 'capacitorjs':
      return capacitorjs;
    case 'coffeescript':
      return coffeescript;
    case 'memsql':
      return memsql;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'vuetifyjs':
      return vuetifyjs;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;
    case 'dart':
      return dart;
    case 'go':
      return go;
    case 'java':
      return java;
    case 'kotlin':
      return kotlin;
    case 'julia':
      return julia;
    case 'matlab':
      return matlab;
    case 'php':
      return php;
    case 'python':
      return python;
    case 'ruby':
      return ruby;
    case 'swift':
      return swift;
    case 'adobe audition':
      return adobeaudition;
    case 'aws':
      return aws;
    case 'deno':
      return deno;
    case 'django':
      return django;
    case 'firebase':
      return firebase;
    case 'gimp':
      return gimp;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'lightroom':
      return lightroom;
    case 'materialui':
      return materialui;
    case 'nginx':
      return nginx;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'premiere pro':
      return premierepro;
    case 'pytorch':
      return pytorch;
    case 'selenium':
      return selenium;
    case 'strapi':
      return strapi;
    case 'tensorflow':
      return tensorflow;
    case 'webix':
      return webix;
    case 'wordpress':
      return wordpress;
    case 'azure':
      return azure;
    case 'blender':
      return blender;
    case 'fastify':
      return fastify;
    case 'figma':
      return figma;
    case 'flutter':
      return flutter;
    case 'haxe':
      return haxe;
    case 'ionic':
      return ionic;
    case 'markdown':
      return markdown;
    case 'microsoft office':
      return microsoftoffice;
    case 'picsart':
      return picsart;
    case 'sketch':
      return sketch;
    case 'unity':
      return unity;
    case 'wolframalpha':
      return wolframalpha;
    case 'canva':
      return canva;
    case 'pandas':
      return pandas;
    case 'sklearn':
      return scikitlearn;
    case '.net':
      return dotnet;
    case '.net core':
      return dotnetcore
    case 'kubernetes':
      return kubernetes;
    case 'linux':
      return linux;
    case 'sqlalchemy':
      return sqlalchemy;
    case 'fastapi':
      return fastapi;
    default:
      break;
  }
}
