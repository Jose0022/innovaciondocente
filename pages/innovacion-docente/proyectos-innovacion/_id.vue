<template>
  <div>
    <!-- Title -->
    <header>
      <h1>
        {{proyecto.name}}
      </h1>
    </header>

    <section class="container">
      <!-- Img - banner -->
      <div v-if="proyecto.img">
        <div class="banner">
          <div class="banner-img"
               :style="getBannerPath(proyecto.img)"></div>
        </div>
        <div class="spacer"></div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <!-- proyect type -->
          <h2>{{proyecto.type | proyectoInnovacionType}}</h2>
          <!-- modality -->
          <h3><b>Modalidad: </b> {{proyecto.modality}}</h3>
          <div class="spacer"></div>
          <!-- areas -->
          <span v-if="proyecto.area.administrativa ||proyecto.area.biologica ||proyecto.area.sociohumanistica || proyecto.area.tecnica"
                class="areas">
            <h3>Areas</h3>
            <AreasChips :area='proyecto.area'
                        :queryType='proyecto.type' />
            <div class="spacer"></div>
          </span>
          <!-- carreers -->
          <span v-if="proyecto.participants.length > 0">
            <h3>Carreras Participantes</h3>
            <ul>
              <li v-for="(carreer, i) in getProjectCarreers(proyecto.participants)"
                  :key="i">{{carreer}}</li>
            </ul>
            <div class="spacer"></div>
          </span>

          <!-- Downloadable -->
          <span v-if="proyecto.documents.length > 0">
            <h3>Descargables</h3>
            <ul>
              <li v-for="(document, i) in proyecto.documents"
                  :key="i">{{document}}</li>
            </ul>
          </span>
          <br>
          <!-- Infografia -->
          <div v-if="proyecto.infografic">
            <ImageModal :img='proyecto.infografic' />
            <div class="spacer"></div>
          </div>
        </div>
        <!--  -->
        <!--  -->
        <!-- left side -->
        <!--  -->
        <!--  -->
        <div class="col-md-8">
          <!-- Coordinator -->
          <h3>Coordinador de la propuesta</h3>
          <span class="data-field">{{proyecto.coordinator}}</span>
          <div class="spacer"></div>

          <!-- Period -->
          <span v-if="proyecto.periods.length > 0">
            <h3>Período académico de ejecución</h3>
            <span class="data-field">
              {{getProjectPeriods(proyecto.periods)}}
            </span>
          </span>
          <div class="spacer"></div>

          <!-- strategicLine -->
          <span>
            <h3>Línea estratégica que se desarrollará en la propuesta</h3>
            <span class="data-field">
              {{proyecto.strategicLine}}
            </span>
          </span>
          <div class="spacer"></div>

          <!-- subject -->
          <span v-if="proyecto.subject">
            <h3>Asignatura </h3>
            <span class="data-field">
              {{proyecto.subject}}
            </span>
          </span>
          <div class="spacer"></div>

          <!-- participants -->
          <span v-if="proyecto.participants.length >0 ">
            <h3>Docentes que participan en la propuesta </h3>
            <ul>
              <li v-for="(participant,i) in proyecto.participants"
                  :key="i">{{participant.name}}</li>
            </ul>
          </span>
          <br>

          <!-- video -->
          <VideoModal :videoID='proyecto.videoID'
                      maxRes="true"
                      v-if="proyecto.videoID" />
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";
import AreasChips from "@/components/innovacion-docente/proyectos-innovacion/AreasChips";
import ImageModal from "@/components/utils/ImageModal";
import VideoModal from "@/components/utils/VideoModal";
export default {
  async asyncData({ params }) {
    let proyecto = null;
    try {
      const docSnap = await AFirestore.collection(
        "/innovacion-docente/proyectos-innovacion/proyectos"
      )
        .doc(params.id)
        .get();
      if (docSnap.exists) {
        proyecto = { ...docSnap.data(), id: docSnap.id };
      }
    } catch (error) {}
    return { proyecto };
  },
  methods: {
    getBannerPath(img) {
      return "background-image: url(" + img + ");";
    },
    getProjectPeriods: proyectPeriods => {
      let res = "";
      for (let i = 0; i < proyectPeriods.length; i++) {
        res += proyectPeriods[i].name;
        if (i < proyectPeriods.length - 1) {
          res += " / ";
        }
      }
      return res;
    },
    getProjectCarreers: proyectParticipants => {
      let carreers = [];
      for (let i = 0; i < proyectParticipants.length; i++) {
        carreers.push(proyectParticipants[i].department);
      }

      return carreers.filter(function(item, pos) {
        return carreers.indexOf(item) == pos;
      });
    }
  },
  components: { AreasChips, ImageModal, VideoModal },
  head() {
    return {
      title: this.proyecto ? this.proyecto.name : "No se encontro el proyecto"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
@import "assets/header";
$space-elements: 20px;
.banner {
  height: 40vh;
  width: 100%;
  overflow: hidden;
  &-img {
    background-image: url("~/static/default.png");
    height: 100%;
    width: 100%;
    background-color: $color-primary;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
  }
}

h1 {
  font-size: 26px;
  font-weight: 600;
  padding-bottom: 15px;
}

.spacer {
  margin-bottom: $space-elements !important;
  margin-top: $space-elements !important;
}
ul {
  margin-bottom: $space-elements;
}
h2 {
  font-size: 28px;
  font-weight: 400;
  margin-bottom: $space-elements;
  color: $color-primary;
}
h3 {
  font-size: 23px;
  font-weight: 400;
}
.data-field {
  margin-left: 15px;
}
</style>

