import AuthLayout from "@/components/layout/AuthLayout";
import Box from "@/components/molecules/Box";
import Box3 from "@/components/molecules/Box3";
import { databoxes, databoxes2, dataCard1 } from "@/utils/data";
import Card from "@/components/molecules/Card";
import { card1 } from "@/assets/images/images";
import HowItWorks from "@/components/organisms/HowItWorks";
export default function page() {
  return (
    <div>
      <AuthLayout>
   <HowItWorks></HowItWorks>
      </AuthLayout>
    </div>
  );
}
