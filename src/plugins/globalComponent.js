import BtnSlot from "@/components/Ui/BtnSlot.vue";
import DepositbtnSlot from "@/components/Ui/DepositbtnSlot.vue";
import DivideSlot from "@/components/Ui/DivideSlot.vue";
import GlassSlot from "@/components/Ui/GlassSlot.vue";
import HeadingSlot from "@/components/Ui/HeadingSlot.vue";
import InputSlot from "@/components/Ui/InputSlot.vue";
import NavBar from "@/components/nav/NavBar.vue";
import LoadingSlot from "@/components/Ui/LoadingSlot.vue";

export default {
    install(app) {
        app.component('BtnSlot', BtnSlot)
        app.component('DepositbtnSlot', DepositbtnSlot)
        app.component('DivideSlot', DivideSlot)
        app.component('GlassSlot', GlassSlot)
        app.component('HeadingSlot', HeadingSlot)
        app.component('InputSlot', InputSlot)
        app.component('NavBar', NavBar)
        app.component('LoadingSlot', LoadingSlot)
    }
}