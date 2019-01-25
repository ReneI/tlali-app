

<template>

<Page class="page" actionBarHidden="true" backgroundSpanUnderStatusBar="true">

        <DockLayout class="screen" stretchLastChild="true">
            <GridLayout class="bottom-tabs" columns="*,*,*,*" height="71"
                orientation="horizontal" dock="bottom">
                <Image row="0" col="0" height="20" src="~/assets/images/home.png" />
                <Image row="0" col="1" height="20" src="~/assets/images/explore.png" />
                <Image row="0" col="2" height="20" src="~/assets/images/saved.png" />
                <Image row="0" col="3" height="20" src="~/assets/images/contacts.png" />
            </GridLayout>
<ScrollView dock="top">
                <StackLayout orientation="vertical">


                    <GridLayout class="header" rows="auto" columns="*,auto,auto">

                        <StackLayout class="page m-20">
                                           <Label>
        <FormattedString>
              <Span text="DGO" fontSize="28" underline="true" color="#3D4FBF" foregroundColor="white" fontFamily="Courier"></Span>
      <Span text=" Noticias"></Span>
    </FormattedString>
            </Label>

</StackLayout>

                        <Image src="~/assets/images/search.png"
                            verticalAlignment="center" marginRight="25" row="0"
                            col="1" height="22" />
                            

                        <Image src="~/assets/images/chevron-left.png"
                            verticalAlignment="center" marginRight="25" row="0"
                            col="0" height="22" />
                    
                    </GridLayout>
                    <GridLayout class="tabs" columns="*,*,*,*,*" height="30">
                        <Label class="active" text="PORTADA" row="0" col="0"></Label>
                        <Label text="COLUMNAS" row="0" col="1"></Label>
                        <Label text="HOROSCOPOS" row="0" col="2"></Label>
                        <Label text="POLITICA" row="0" col="3"></Label>
                        <Label text="DURANGO" row="0" col="4"></Label>
                    </GridLayout>
                    <StackLayout class="content">
                        <Label class="h1" text="NACIONAL"></Label>
                        <GridLayout class="room-list-header" rows="auto"
                            columns="*,auto" height="19">
                            <Label class="h2" text="hoy" row="0"
                                col="0" colspan="6"></Label>
                            <Label class="see-all" text="ver todas" row="0" col="1"
                                colspan="2"></Label>
                        </GridLayout>
                        <ScrollView class="rooms" height="185" orientation="horizontal"
                            loaded="disableScrollBar">
                            <StackLayout orientation="horizontal">
                                <StackLayout class="first-child room" width="138"
                                    @tap="showDetails()" pageTransition="fade">
                                    <!-- <Image height="138" src="~/assets/images/.jpg" /> -->
                                    <StackLayout height="20" class="stars"
                                        orientation="horizontal">
                                 <Label class="h2" height="10" text="DEPORTES"></Label>


                                    </StackLayout>
                                    <Label class="h2" height="21" text="NOTiICIA"></Label>
                                </StackLayout>
                                <StackLayout class="room" width="138" @tap="showDetails()">
                                    <!-- <Image height="138" src="~/assets/images/room3.jpg" /> -->
                                    <StackLayout height="9.71" class="stars"
                                        orientation="horizontal">
                                      
                                    </StackLayout>
                                    <Label class="h2" height="21" text="NOTiICIA"></Label>
                                </StackLayout>
                              
                            </StackLayout>
                        </ScrollView>
                    </StackLayout>

                     <GridLayout class="cardSection">
       <ListView for="item in datos" separatorColor="transparent">
  <v-template>
    <StackLayout :backgroundColor="$even ? 'red' : 'blue'" >
      <Label v-for="i in item.article"  :text="i"/>
    </StackLayout>
  </v-template>
        </ListView>
        
        </GridLayout>
<card-view  v-for="item in datos" class="card" elevation="40" radius="10" @tap="showDetails()" pageTransition="fade">
  <stack-layout>
    <label text="Hello World" />
    						<Label class="h2" :text="item.author" />
                  <Label class="h2" :text="item.location" />
                  <Label class="h2" :text="item.publishStatus" />
          <Label class="h2" :text="item.s3Dir" />




  </stack-layout>
</card-view>



                        </StackLayout>

            </ScrollView>
   
   
        </DockLayout>

    </page>


</template>







<script>
  import * as http from "http";
    import Details from "./Details";

    export default {
        computed: {},
        data() {
            return {
                datos: []
            };
        },   mounted() {
     http.getJSON("https://o2dstvq9sb.execute-api.us-west-2.amazonaws.com/dev/articles").then(result => {
  this.datos = result;
}, error => {
  console.log(error);
});
    },
        methods: {
            onButtonTap() {},
            showDetails() {
                this.$navigateTo(Details, {
                    animated: true,
                    transition: {
                        name: "fade",
                        duration: 380,
                        curve: "easeIn"
                    }
                });
            }
        }
    };
</script>

<style scoped>
    .bottom-tabs,
    .header {
        padding: 18 18;
    }

    .see-all {
        padding: 0 18;
    }


    .titulo{
        font-size: 14pt;
        font-weight: 800;
    }
    .blue {
  color:rgb(26, 141, 149);
  
  }
    .tabs {
        font-size: 13pt;
        font-weight: bold;
        padding: 0 9;
    }

    .tabs Label {
        border-bottom-color: #686871;
        border-bottom-width: 1;
        color: #979797;
        padding-bottom: 12;
        text-align: center;
    }

    .tabs Label.active {
        border-bottom-color: #ED2567;
        border-bottom-width: 1;
        color: #ED2567;
    }

    .content {
        padding: 32 0 0 0;
    }

    .content .h1,
    .content .h2 {
        padding-left: 14;
                font-size: 10pt;

    }

    .room-list-header {
        margin-top: 24;
    }

    .see-all {
        color: #979797;
        font-size: 10pt;
        font-weight: 600;
        text-align: right;
    }

    .rooms {
        margin-top: 18;
    }
	.home-panel {
		vertical-align: center;
		font-size: 20;
		margin: 15;
	}

	.description-label {
		margin-bottom: 15;
	}
    .room {
        padding-right: 12;
    }

    .room.first-child {
        margin-left: 18;
    }

    .room .h2 {
        padding-left: 0;
    }

    .room Image {
        border-radius: 12;
    }

    .room Label.h2 {
        color: #CE9F70;
        margin-top: 8.29;
    }

    .stars {
        margin-top: 8;
    }

    .stars Image {
        padding-right: 1.71;
    }
</style>