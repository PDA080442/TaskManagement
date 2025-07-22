<template>
  <v-container fluid class="home_container">
    <v-row>
      <v-col v-for="card in cards" :key="card.title" cols="12" sm="4">
        <v-card class="pa-4" outlined>
          <v-card-title>
            <v-icon left :color="card.color">{{ card.icon }}</v-icon>
            <span class="subtitle-1 font-weight-medium">{{ card.title }}</span>
            <v-spacer />
            <span class="text-h5 font-weight-bold">{{ card.count }}</span>
          </v-card-title>

          <v-divider />

          <v-card-text>
            <v-sparkline
              :value="card.data"
              type="line"
              smooth
              :color="card.color"
              :width="200"
              :height="60"
              class="my-4"
            />

            <v-row justify="space-between" align="center" no-gutters>
              <v-col cols="auto" class="pa-0">
                <span class="subtitle-2 font-weight-medium"> {{ card.diff }} more </span>
              </v-col>
              <v-col cols="auto" class="pa-0">
                <span class="subtitle-2 grey--text"> from last week </span>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  data: () => ({
    cards: [
      {
        title: 'Task Completed',
        count: '08',
        icon: 'mdi-star-outline',
        color: 'purple',
        data: [3, 5, 4, 6, 7, 5, 8],
        diff: '10+',
      },
      {
        title: 'New Task',
        count: '10',
        icon: 'mdi-file-document-outline',
        color: 'blue',
        data: [2, 4, 3, 5, 6, 4, 7],
        diff: '10+',
      },
      {
        title: 'Project Done',
        count: '10',
        icon: 'mdi-clipboard-check-outline',
        color: 'red',
        data: [1, 3, 2, 4, 5, 3, 6],
        diff: '08+',
      },
    ],
  }),
}
</script>

<style scoped>
.home_container {
  background-color: gre;
}
</style>
