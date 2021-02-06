

import { WorkerMultiStitchResult } from '@/models/WorkerMultiStitchResult';

import { stitchName, multiStitchName } from '@/models/constants/images';
import { ImageDataConversion } from '@/utilities/ImageDataConversion';

const state = {
  imageResults: {

    [multiStitchName]: new WorkerMultiStitchResult(stitchName, ImageDataConversion.imageSrcFromImageData)
  }
}

const getters = {
  imageData(state) {
    return name => state.imageResults[name].imageData;
  },
  imageDataUrl(state) {
    return name => state.imageResults[name].imageDataUrl;
  },
  imageDataValid(state) {
    return name => state.imageResults[name].imageDataValid;
  },
  success(state) {
    return name => state.imageResults[name].success;
  },
  time(state) {
    return name => state.imageResults[name].time;
  },
  settings(state) {
    return name => state.imageResults[name].settings;
  },
  multiStitcherFieldOfView(state) {
    return state.imageResults[multiStitchName].fieldOfView;
  }
}

const mutations = {
  imageData(state, { name, imageData, imageDataSmall }) {
    if(!imageData) state.imageResults[name].imageData = null;
    else state.imageResults[name].setImageData(imageData, imageDataSmall);
  },
  success(state, { name, success }) {
    state.imageResults[name].success = success;
  },
  time(state, { name, time }) {
    state.imageResults[name].time = time;
  },
  settings(state, { name, settings }) {
    if(!settings) return;
    settings.copyValuesTo(state.imageResults[name].settings);
  },
  multiStitcherFieldOfView(state, value) {
    return state.imageResults[multiStitchName].fieldOfView = value;
  }
}

const actions = {
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
