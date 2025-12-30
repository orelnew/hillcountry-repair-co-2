import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import remodelingImage from "@/assets/Gemini_Generated_Image_vv5efovv5efovv5e.png";
import logo from "@/assets/logo.png";

interface FormData {
  name: string;
  phone: string;
  projectType: string[];
  planningStage: string;
  startTime: string;
  budget: string;
  experience: string;
  propertyAddress: string;
  isOwner: string;
  readyToMove: string;
  bestTime: string;
}

const LeadFunnel = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    projectType: [],
    planningStage: "",
    startTime: "",
    budget: "",
    experience: "",
    propertyAddress: "",
    isOwner: "",
    readyToMove: "",
    bestTime: "",
  });

  const totalSteps = 11;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleProjectTypeToggle = (value: string) => {
    setFormData(prev => ({
      ...prev,
      projectType: prev.projectType.includes(value)
        ? prev.projectType.filter(item => item !== value)
        : [...prev.projectType, value]
    }));
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.name.trim() !== "";
      case 1:
        return formData.projectType.length > 0;
      case 2:
        return formData.planningStage !== "";
      case 3:
        return formData.startTime !== "";
      case 4:
        return formData.budget !== "";
      case 5:
        return formData.experience !== "";
      case 6:
        return formData.propertyAddress.trim() !== "";
      case 7:
        return formData.isOwner !== "";
      case 8:
        return formData.readyToMove !== "";
      case 9:
        return formData.phone.trim() !== "";
      case 10:
        return formData.bestTime !== "";
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Let's get started!</h2>
              <p className="text-gray-600">What's your name?</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Smith"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="text-lg py-6"
                autoFocus
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Great, {formData.name}!</h2>
              <p className="text-gray-600">What type of project are you looking to do?</p>
              <p className="text-sm text-gray-500">Select all that apply</p>
            </div>
            <div className="space-y-3">
              {["Kitchen Remodel", "Bathroom Remodel", "Full Home Remodel", "Room Addition", "Deck/Patio", "Fencing", "Painting", "Other"].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors"
                  onClick={() => handleProjectTypeToggle(option)}>
                  <Checkbox
                    id={option}
                    checked={formData.projectType.includes(option)}
                    onCheckedChange={() => handleProjectTypeToggle(option)}
                  />
                  <Label htmlFor={option} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Perfect!</h2>
              <p className="text-gray-600">Have you already started planning, or are you in the early idea stage?</p>
            </div>
            <RadioGroup value={formData.planningStage} onValueChange={(value) => setFormData({ ...formData, planningStage: value })}>
              {[
                "Just exploring ideas",
                "Have a rough plan",
                "Detailed plans ready",
                "Ready to start immediately"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">When would you like the project to start?</h2>
            </div>
            <RadioGroup value={formData.startTime} onValueChange={(value) => setFormData({ ...formData, startTime: value })}>
              {[
                "As soon as possible",
                "Within 1-2 months",
                "Within 3-6 months",
                "More than 6 months",
                "Just planning for now"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Do you have a budget range in mind?</h2>
              <p className="text-gray-600">This helps us provide the most relevant options</p>
            </div>
            <RadioGroup value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
              {[
                "Under $10,000",
                "$10,000 - $25,000",
                "$25,000 - $50,000",
                "$50,000 - $100,000",
                "Over $100,000",
                "Not sure yet"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Have you done similar projects before?</h2>
            </div>
            <RadioGroup value={formData.experience} onValueChange={(value) => setFormData({ ...formData, experience: value })}>
              {[
                "Yes, multiple times",
                "Yes, once or twice",
                "No, this is my first time"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">What is the property address?</h2>
              <p className="text-gray-600">This helps us confirm we service your area</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Property Address</Label>
              <Input
                id="address"
                type="text"
                placeholder="123 Main St, Austin, TX 78701"
                value={formData.propertyAddress}
                onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                className="text-lg py-6"
                autoFocus
              />
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Are you the property owner?</h2>
            </div>
            <RadioGroup value={formData.isOwner} onValueChange={(value) => setFormData({ ...formData, isOwner: value })}>
              {[
                "Yes, I own the property",
                "No, I'm a tenant",
                "I'm acting on behalf of the owner"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">If you find the right contractor and the pricing makes sense...</h2>
              <p className="text-gray-600">Are you ready to move forward?</p>
            </div>
            <RadioGroup value={formData.readyToMove} onValueChange={(value) => setFormData({ ...formData, readyToMove: value })}>
              {[
                "Yes, ready to get started",
                "Probably, need to review details",
                "Still comparing options",
                "Just gathering information"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 9:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">What's the best phone number to reach you?</h2>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(512) 555-0123"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="text-lg py-6"
                autoFocus
              />
            </div>
          </div>
        );

      case 10:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">What's the best time to call?</h2>
            </div>
            <RadioGroup value={formData.bestTime} onValueChange={(value) => setFormData({ ...formData, bestTime: value })}>
              {[
                "Morning (8am - 12pm)",
                "Afternoon (12pm - 5pm)",
                "Evening (5pm - 8pm)",
                "Anytime"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      default:
        return null;
    }
  };

  if (currentStep === totalSteps) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in duration-500">
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-16 h-16 text-green-600" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Thank you, {formData.name}!
            </h1>
            <p className="text-xl text-gray-600">
              We've received your information and one of our representatives will call you soon.
            </p>
            <div className="pt-4 space-y-2">
              <p className="text-lg text-gray-700">
                📞 Expect a call at: <span className="font-semibold">{formData.phone}</span>
              </p>
              <p className="text-gray-600">
                Best time to reach you: <span className="font-semibold">{formData.bestTime}</span>
              </p>
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <p className="text-gray-600 mb-6">
              Want to discuss your project sooner? Book a meeting with us now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/book-meeting")}
                size="lg"
                className="text-lg px-8"
              >
                Book a Meeting
              </Button>
              <Button
                onClick={() => navigate("/")}
                variant="outline"
                size="lg"
                className="text-lg px-8"
              >
                Return to Homepage
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <Progress value={progress} className="h-2 rounded-none" />
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <span className="text-sm text-gray-600">
            Step {currentStep + 1} of {totalSteps}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="text-gray-600"
          >
            Exit
          </Button>
        </div>
      </div>

      {/* Hero Cover Section */}
      <div className="relative h-64 md:h-80 mt-16">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${remodelingImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/60" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <img
            src={logo}
            alt="Hill Country Repair Co."
            className="h-16 w-16 md:h-20 md:w-20 mb-4 animate-in fade-in zoom-in duration-500"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            Hill Country Repair Co.
          </h1>
          <p className="text-lg md:text-xl text-cream/90 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            Get Your Free Project Estimate - Let's Turn Your Vision Into Reality
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-8 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-6">
              {currentStep > 0 && (
                <Button
                  onClick={handleBack}
                  variant="outline"
                  size="lg"
                  className="w-full md:w-auto"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              )}
              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
                size="lg"
                className="w-full md:flex-1"
              >
                {currentStep === totalSteps - 1 ? "Submit" : "Continue"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadFunnel;
