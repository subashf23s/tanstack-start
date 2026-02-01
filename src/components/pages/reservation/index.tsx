import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import InputDate from "@/components/ui/input-date";
import InputTime from "@/components/ui/input-time";

const ReservationPage = () => {
  return (
    <section className="container mx-auto py-4">
      <h1 className="border-l-5 border-l-yellow-500 pl-4 text-3xl font-semibold">
        Make A Reservation
      </h1>
      <Card className="mt-4">
        <CardTitle>Pick your date and time</CardTitle>
        <CardContent>
          <form className="flex gap-4">
            <Field>
              <FieldLabel htmlFor="date">Select Date</FieldLabel>
              <InputDate id="date" placeholder="Select Date" />
            </Field>
            <Field>
              <FieldLabel htmlFor="time">Select Time</FieldLabel>
              <InputTime id="time" placeholder="Select Time" />
            </Field>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default ReservationPage;
