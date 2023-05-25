"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ProfileForm } from '@/components/profile';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { Copy } from 'lucide-react';
import { StyledKofiButton } from '@/components/kofibtn';



export default function Home() {
  const { toast } = useToast()

  const [email, setEmail] = useState(String);
  const [name, setName] = useState(String);
  const [url, setUrl] = useState(String);
  // Inside the Home component
  const handleFormSubmit = (data) => {
    // Perform desired operations with the form data
    toast({
      description: "Your privacy policy has been created.",
      action: <ToastAction altText="Okay">Okay</ToastAction>,

    })

    // Update state or perform any other actions with the form data
    setEmail(data.email);
    setName(data.name);
    setUrl(data.url);
  };
  return (
    <div className='flex gap-10 flex-col px-10 md:px-20 justify-center'>

      <div className='flex justify-center'>
        <Card className='flex flex-col w-full max-w-2xl gap-2.5'>
          <CardHeader>
            <CardTitle className='font-bold'>Privacy Policy Generator</CardTitle>
            <CardDescription>
              Generate a privacy policy in record time.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col w-full gap-3.5' >
              <Alert variant="destructive">
                <AlertTitle>Wait!</AlertTitle>
                <AlertDescription>
                  The generated privacy policy should not be considered a legally binding document. It is provided as is, without any warranties. We will not be held responsible for any claims, damages, or liabilities arising from the use of the generated privacy policy.                </AlertDescription>
              </Alert>

              <ProfileForm onSubmit={handleFormSubmit} />

            </div>
          </CardContent>


        </Card>

      </div>

      <div className='flex justify-center'>
        <div className='flex border-t-2 border-border flex-col justify-center prose-sm md:prose-xl  prose-stone/ w-full max-w-2xl'>
          {email ? (
            <div className='py-5 relative'>
              <h1 className="font-bold">Privacy Policy</h1>
              <h2 className="font-bold">Introduction</h2>
              <p>
                This Privacy Policy outlines how {name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects,
                uses, and protects your personal information when you visit our website at{" "}
                <a href="{url}">{url}</a> or contact us via email at{" "}
                <a href="mailto:{email}">{email}</a>. We are committed to maintaining the
                privacy and security of your information and ensuring that it is used only in
                accordance with this Privacy Policy.
              </p>
              <h2 className="font-bold">Information We Collect</h2>
              <p>
                We may collect certain personal information from you when you interact with
                our website or communicate with us via email. This information may include:
              </p>
              <ul>
                <li>Full name</li>
                <li>Contact information, such as email address and phone number</li>
                <li>Demographic information, such as your location</li>
                <li>Information you provide when contacting our support or customer service</li>
              </ul>
              <p>
                Please note that we do not knowingly collect personal information from
                individuals under the age of 18. If you are under 18, please do not provide us
                with any personal information.
              </p>
              <h2 className="font-bold">How We Use Your Information</h2>
              <p>
                We use the information we collect from you for the following purposes:
              </p>
              <ul>
                <li>To provide and improve our services</li>
                <li>To respond to your inquiries, requests, or questions</li>
                <li>To personalize your experience on our website</li>
                <li>
                  To send periodic emails regarding our services or other relevant information
                </li>
                <li>To detect, prevent, and address technical or security issues</li>
              </ul>
              <h2 className="font-bold">Disclosure of Your Information</h2>
              <p>
                We may share your personal information with third parties only in the following circumstances:
              </p>
              <ul>
                <li>With your consent</li>
                <li>When required by law or to respond to legal process</li>
                <li>
                  To protect our rights, privacy, safety, or property, or that of others
                </li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>
              <p>
                We will not sell, rent, or otherwise disclose your personal information to
                third parties for marketing purposes without your explicit consent.
              </p>
              <h2 className="font-bold">Security</h2>
              <p>
                We are committed to ensuring that your information is secure. We have
                implemented appropriate technical and organizational measures to safeguard
                and protect your personal information from unauthorized access, disclosure,
                alteration, or destruction.
              </p>
              <h2 className="font-bold">Links to Third-Party Websites</h2>
              <p>
                Our website may contain links to third-party websites. Please note that we
                have no control over the content, privacy policies, or practices of these
                third-party websites. We encourage you to review the privacy policies of
                those websites before providing any personal information.
              </p>
              <h2 className="font-bold">Changes to This Privacy Policy</h2>
              <p>
                We reserve the right to update or modify this Privacy Policy at any time. Any
                changes will be effective immediately upon posting the revised Privacy Policy
                on our website. We encourage you to periodically review this page for the
                latest information on our privacy practices.
              </p>
              <h2 className="font-bold">Contact Us</h2>
              <p>
                If you have any questions, concerns, or suggestions regarding this Privacy
                Policy, please contact us at <a href="mailto:{email}">{email}</a>.
              </p>
            </div>

          ) : (
            <div className="space-y-2 py-5">
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-4/5" />
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-4/5" />
            </div>
          )
          }
        </div>
      </div>
    </div>
  );
}
