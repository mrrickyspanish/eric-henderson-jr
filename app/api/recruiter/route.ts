import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));

    const sport = String(body.sport || "").trim();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim() || null;
    const school = String(body.school || "").trim() || null;
    const role = String(body.role || "").trim() || null;
    const message = String(body.message || "").trim() || null;

    if (!sport || !name || !email) {
      return NextResponse.json(
        { ok: false, error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Optional: validate .edu email
    // if (!email.endsWith('.edu')) {
    //   return NextResponse.json(
    //     { ok: false, error: "Please use your university email address." },
    //     { status: 400 }
    //   );
    // }

    // Insert into Supabase
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("recruiter_messages").insert([
      {
        sport,
        name,
        email,
        phone,
        school,
        role,
        message,
      },
    ]);

    if (error) {
      console.error("Supabase recruiter_messages insert error:", error);
      return NextResponse.json(
        { ok: false, error: "Database insert failed." },
        { status: 500 }
      );
    }

    // Send email notification to family
    try {
      await resend.emails.send({
        from: "Recruiter Inquiry <recruiter@lamarinpowell.com>",
        to: "Jmelprh22@gmail.com",
        bcc: "rj@creativeeyemultimedia.com",
        replyTo: email, // Allow replies to go to the recruiter
        subject: `New ${sport.toUpperCase()} Recruiting Inquiry - ${school || name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e293b; border-bottom: 3px solid #3b82f6; padding-bottom: 10px;">
              New Recruiting Inquiry
            </h2>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #475569; margin-top: 0;">Sport</h3>
              <p style="font-size: 16px; color: #1e293b; text-transform: uppercase; font-weight: bold;">
                ${sport}
              </p>
            </div>

            <div style="background: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #475569; margin-top: 0;">Recruiter Information</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <span style="color: #3b82f6;">${email}</span></p>
              ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
              ${school ? `<p><strong>School:</strong> ${school}</p>` : ''}
              ${role ? `<p><strong>Role:</strong> ${role}</p>` : ''}
            </div>

            ${message ? `
              <div style="background: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #475569; margin-top: 0;">Message</h3>
                <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
              </div>
            ` : ''}

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #64748b; font-size: 12px;">
              <p>This inquiry was submitted via lamarinpowell.com</p>
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Email send error:", emailError);
      // Don't fail the request if email fails - data is already saved
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Recruiter POST fatal error:", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
