<template>
  <div class="row">

    <div class="col-6">
      <input ref="imageUpload" type="file" style="display: none" @change="onFileUpload" >
      <el-button size="small" type="primary" @click="$refs.imageUpload.click()">Click to upload</el-button>
      <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
      <draggable
        v-model="list"
        v-bind="dragOptions"
        class="el-upload-list el-upload-list--picture"
        tag="ul"
        @start="isDragging = true"
        @end="isDragging = false"
        @update="emitChanges()">
        <transition-group type="transition" name="flip-list">
          <li
            v-for="element in list"
            :key="element.order"
            class="el-upload-list__item is-success">
            <i
              :class=" element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'"
              aria-hidden="true"
              @click="element.fixed = !element.fixed" />

            <img :src="element.url" alt="" class="el-upload-list__item-thumbnail" @click="showImageViewerDialog(element)" >
            <div class="el-upload-list__item-name">
              {{ element.name }}
              <el-button type="warning" size="small" style="float: right;" @click="deleteImage(element)">Delete</el-button>
            </div>
          </li>
        </transition-group>
      </draggable>
    </div>

    <el-dialog :visible.sync="isImageViewerDialog" :title="imageViewerSrc.title">
      <img :src = "imageViewerSrc.url" style="height: 100%; width: 100%; object-fit: contain;">
    </el-dialog>
  </div>

</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'TransitionExample',
  display: 'Transition',
  components: {
    draggable
  },
  props: {
    value: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data() {
    return {
      isImageViewerDialog: false,
      imageViewerSrc: {
        title: '',
        url: ''
      },
      isDragging: false,
      list: this.value.map((obj, index) => {
        return { name: obj.name, url: obj.url, order: index + 1 }
      })
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }
    }
  },
  methods: {
    onFileUpload(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) { return }
      const reader = new FileReader()

      reader.readAsDataURL(files[0])
      reader.onload = () => {
        this.addImage({
          name: files[0].name,
          url: reader.result
        })
      }
    },
    addImage(image) {
      this.value.push(image)
      image.order = this.list.length + 1
      this.list.push(image)
    },
    deleteImage(image) {
      this.list.splice(this.list.indexOf(image), 1)
      this.emitChanges()
    },
    showImageViewerDialog(element) {
      this.imageViewerSrc.title = element.name
      this.imageViewerSrc.url = element.url
      this.isImageViewerDialog = true
    },
    emitChanges() {
      let order = 1
      const res = this.list.map(obj => {
        return {
          name: obj.name,
          url: obj.url,
          order: order++
        }
      })
      this.$emit('input', res)
    }
  }
}
</script>

<style>
.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
