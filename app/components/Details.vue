<template>
    <Page class="page" actionBarHidden="true" backgroundSpanUnderStatusBar="true">

        <GridLayout class="room-page screen" columns="*">
            <AbsoluteLayout class="background-image" row="0" col="0">
                <Image src="~/assets/images/Group_48@3x.png"></Image>
            </AbsoluteLayout>
            <DockLayout stretchLastChild="true" row="0" col="0">
                <DockLayout class="toolbar" dock="top" height="50"
                    stretchLastChild="false">
                    <StackLayout dock="left" @tap="$navigateBack()">
                        <Image src="~/assets/images/chevron-left.png"></Image>
                    </StackLayout>
                    <StackLayout dock="right" @tap="toggleBookmark()">
                        <Image v-if="!bookmarked" src="~/assets/images/saved.png">
                        </Image>
                        <Image v-if="bookmarked" src="~/assets/images/saved-selected.png">
                        </Image>
                    </StackLayout>
                </DockLayout>
                <ScrollView dock="bottom">
                    <StackLayout class="room-page-content">
                        <GridLayout class="header" columns="*,*" rows="auto,auto"
                            height="78">
                            <Label class="h1" text="TIUTLO NOTICIA" row="0" col="0"
                                colspan="6"></Label>
                            <Label class="h2" text="SECCION" row="1" col="0"
                                colspan="6"></Label>
                        </GridLayout>
                        <Label class="description" textWrap="true" text="o sociis natoque penatibus et magnis dis"></Label>
                        <ScrollView class="room-pics" height="185"
                            orientation="horizontal" loaded="disableScrollBar">
                            <StackLayout orientation="horizontal">
                               <!--  galeriaa 
                                <Image class="first-child" width="138" src="~/assets/images/Mask_Group_2@3x.png">
                                </Image>
                                <Image width="138" src="~/assets/images/Mask_Group_4@3x.png">
                                </Image> -->
                         
                            </StackLayout>
                        </ScrollView>
                        <!-- <StackLayout class="indicators" height="4" width="44" orientation="horizontal">
                    <Label text=""
                </StackLayout> -->
                       <!--  <DockLayout class="expandable" height="31"
                            stretchLastChild="true">
                            <Image dock="right" height="8" src="~/assets/images/chevron-down.png"></Image>
                        </DockLayout>
                        <DockLayout class="expandable" height="31"
                            stretchLastChild="true">
                            <Image dock="right" height="8" src="~/assets/images/chevron-down.png"></Image>
                        </DockLayout> -->

                        <GridLayout class="checkout" rows="*,auto" columns="auto,auto">
                            <Image class="savedd" width="30" col="0"
                                rowSpan="2" verticalAlignment="center" src="~/assets/images/saved.png" />
                            <Button class="botonazul" col="1" row="0" text="COMPARTIR"></Button>
                            <Label class="socialmedia" col="1" row="1" text="FACEBOOK TWITTER"></Label>
                        </GridLayout>

                    </StackLayout>
                </ScrollView>
            </DockLayout>
        </GridLayout>

    </Page>
</template>

<script>
    import {
        isIOS,
        isAndroid
    } from "tns-core-modules/platform";
    export default {
        created() {
            console.log("is IOS platform: " + isIOS);
            console.log("is Android platform: " + isAndroid);
        },
        data() {
            return {
                bookmarked: false
            };
        },
        methods: {
            toggleBookmark() {
                this.bookmarked = !this.bookmarked;
            }
        }
    };
</script>
<style scoped>
    .checkout {
        horizontal-align: left;
        border-radius: 10%;
        background-color: white;
        width: 170;
        padding: 5 15;
        margin-left: 18;
        margin-top: 32;
    }

    .savedd {}

    .botonazul {
        color: rgb(236, 236, 236);
        background-color: rgb(209, 220, 226);
        border-color: transparent;
        border-width: 1;
        padding: 0;
        margin: 0 0 0 15;
        height: 20;
        font-size: 12pt;
        font-weight: 600;
        left: 18;
    }

    .socialmedia {
        color: black;
        font-weight: bold;
        font-size: 17;
        padding: 0;
        margin: 0 0 0 15;
        vertical-align: top;
    }

    .screen,
    .toolbar {
        width: 100%;
    }

    .toolbar StackLayout {
        height: 50;
        width: 50;
        margin-top: 10;
        padding: 15;
    }

    .toolbar Image {
        height: 21;
        width: 21;
    }

    .header {
        margin-top: 44;
        padding-left: 18;
    }

    .description {
        padding: 0 18;
    }

    .background-image Image {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgb(230, 222, 116) 100%);
        width: 100%;
    }

    .room-page {
        background-size: cover;
        background-repeat: no-repeat;
    }

    .room-page-content {
        padding: 0 0 60;
    }

    .room-pics Image.first-child {
        margin-left: 18;
    }

    .room-pics Image {
        margin-right: 12;
    }

    .get-this-room Button {
        background-color: #F9F9F9;
        border-radius: 9;
        color: #3E3E3E;
        font-size: 12pt;
        font-weight: 600;
        left: 18;
        margin-bottom: 54;
        margin-top: 32;
        padding: 0 7 22 29;
        text-transform: uppercase;
    }

    .get-this-room Image {
        left: 30;
        top: 49;
    }

    .get-this-room Label {
        color: #000000;
        font-size: 16pt;
        font-weight: bold;
        left: 59;
        top: 60;
    }
</style>