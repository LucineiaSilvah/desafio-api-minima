import fastify from "fastify";
import cors from '@fastify/cors'
const server = fastify();
server.register(cors,{
  origin:"*",
  methods:"GET"
})
//dados
const jogos = [
  {
    "console": "snes",
    "jogos": [
      {
        "id": 1,
        "nome": "The Legend of Zelda: A Link to the Past",
        "descricao": "Um jogo de aventura com quebra-cabeças, exploração de masmorras e itens mágicos. Você joga como Link em uma missão para salvar Hyrule.",
        "categoria": ["Ação", "Aventura"]
      },
      {
        "id": 2,
        "nome": "Super Mario World",
        "descricao": "Mario embarca em uma jornada por Dinosaur Land para resgatar a Princesa Peach. Um dos jogos de plataforma mais icônicos da história.",
        "categoria": ["Plataforma"]
      }
    ]
  },
  {
    "console": "mega drive",
    "jogos": [
      {
        "id": 3,
        "nome": "Sonic the Hedgehog",
        "descricao": "Controle Sonic, o ouriço azul veloz, para derrotar o Dr. Robotnik em níveis cheios de velocidade e anéis dourados.",
        "categoria": ["Plataforma", "Ação"]
      },
      {
        "id": 4,
        "nome": "Streets of Rage",
        "descricao": "Um beat ‘em up clássico onde os heróis enfrentam gangues e chefões em lutas urbanas.",
        "categoria": ["Luta", "Beat 'em up"]
      }
    ]
  },
  {
    "console": "ps1",
    "jogos": [
      {
        "id": 5,
        "nome": "Resident Evil",
        "descricao": "Um jogo de terror de sobrevivência onde você explora uma mansão cheia de zumbis e quebra-cabeças.",
        "categoria": ["Terror", "Sobrevivência"]
      },
      {
        "id": 6,
        "nome": "Crash Bandicoot",
        "descricao": "Ajude Crash a derrotar o vilão Dr. Neo Cortex em uma aventura cheia de obstáculos, frutas wumpa e saltos precisos.",
        "categoria": ["Plataforma", "Aventura"]
      }
    ]
  }
]

const criadores = [
  {
    "id": 1,
    "jogo": "The Legend of Zelda: A Link to the Past",
    "criador": {
      "nome": "Shigeru Miyamoto",
      "descricao": "Designer de jogos lendário da Nintendo, conhecido como o 'pai dos videogames modernos'. Criador de franquias como Mario, Zelda e Donkey Kong.",
      "nascimento": "1952-11-16",
      "morte": null,
      "inspiracao": "Exploração na infância em cavernas e florestas de Kyoto inspiraram a sensação de aventura e descoberta de Zelda."
    }
  },
  {
    "id": 2,
    "jogo": "Super Mario World",
    "criador": {
      "nome": "Shigeru Miyamoto",
      "descricao": "Designer de jogos japonês com uma abordagem única em diversão e jogabilidade. Trabalhou com Takashi Tezuka no design de níveis.",
      "nascimento": "1952-11-16",
      "morte": null,
      "inspiracao": "Baseado na ideia de sonhos, mundos fantasiosos e no desejo de criar o jogo de plataforma definitivo."
    }
  },
  {
    "id": 3,
    "jogo": "Sonic the Hedgehog",
    "criador": {
      "nome": "Yuji Naka",
      "descricao": "Programador e produtor japonês que liderou o desenvolvimento técnico do Sonic original na SEGA.",
      "nascimento": "1965-09-17",
      "morte": null,
      "inspiracao": "Inspirado em jogos rápidos e fluidez de movimentos, além do mascote ideal para competir com o Mario."
    }
  },
  {
    "id": 4,
    "jogo": "Streets of Rage",
    "criador": {
      "nome": "Noriyoshi Ohba",
      "descricao": "Designer da SEGA, liderou projetos de ação e beat ‘em up nos anos 90.",
      "nascimento": "1962-04-15",
      "morte": null,
      "inspiracao": "Inspirado por filmes de ação urbana e jogos como Final Fight."
    }
  },
  {
    "id": 5,
    "jogo": "Resident Evil",
    "criador": {
      "nome": "Shinji Mikami",
      "descricao": "Diretor e designer japonês, mestre do survival horror. Trabalhou para a Capcom e fundou seu próprio estúdio.",
      "nascimento": "1965-08-11",
      "morte": null,
      "inspiracao": "Baseado no jogo Alone in the Dark e filmes de terror zumbi como os de George Romero."
    }
  },
  {
    "id": 6,
    "jogo": "Crash Bandicoot",
    "criador": {
      "nome": "Andy Gavin & Jason Rubin",
      "descricao": "Fundadores da Naughty Dog, dupla que criou Crash e posteriormente trabalhou em Jak & Daxter e Uncharted.",
      "nascimento": {
        "Andy Gavin": "1970-06-11",
        "Jason Rubin": "1970-06-03"
      },
      "morte": null,
      "inspiracao": "Inspirado em desenhos animados como Looney Tunes e jogos de plataforma com visão diferente da tradicional (traseira do personagem)."
    }
  }
]



server.get("/jogos", async(request,response)=>{
  response.type('application/json').code(200);

  return {jogos}
})
interface JogosParams{
  console:string
}
server.get<{Params:JogosParams}>("/jogos/console/:console", async(request,response)=>{
 const { console } = request.params;


const game = jogos.find(g => g.console == console)

if(!game){
    response.type('application/json').code(404);

    return{
      message:"Game Not Found"
    
    }
}else{
  response.type('application/json').code(200);

  return {game}
}

})


server.get("/criadores", async(request,response)=>{
  response.type('application/json').code(200);

  return {criadores}
})

interface CriadoresParams {
  jogo:string
}

server.get<{Params:CriadoresParams}>("/criadores/:jogo",async(request,response)=>{
  const  { jogo } = request.params;
  
  const criador  = criadores.find(c => c.jogo === jogo )



if(!criador){
    response.type("application/json").code(404);
    return{
      message:"Driver nor found"
    }
  }else{
    response.type("application/json").code(200);
    return {criador}
  }
})


server.listen({port:3300},()=>{
  console.log("servidor rodando...")
})