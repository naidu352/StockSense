from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


# -------------------------
# LOGIN PAGE
# -------------------------
@app.route("/")
def login():
    return render_template("login.html")


# -------------------------
# LOGIN
# -------------------------
@app.route("/login", methods=["POST"])
def do_login():

    username = request.form.get("username")
    password = request.form.get("password")

    # Temporary login
    if username == "admin" and password == "admin123":
        return redirect(url_for("dashboard"))

    return render_template(
        "login.html",
        error="Invalid username or password"
    )


# -------------------------
# DASHBOARD
# -------------------------
@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

@app.route("/products")
def products():
    return render_template("products.html")


# -------------------------
# FORGOT PASSWORD
# -------------------------
@app.route("/forgot-password")
def forgot_password():
    return """
    <h2>Password Reset</h2>
    <p>OTP-based password reset will be added later.</p>
    """


# -------------------------
# SIGN UP
# -------------------------
@app.route("/signup")
def signup():
    return """
    <h2>Create StockSense Account</h2>
    <p>Signup functionality will be added later.</p>
    """


# -------------------------
# RUN APPLICATION
# -------------------------
if __name__ == "__main__":
    app.run(debug=True)